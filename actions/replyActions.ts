"use server"

import connectDB from "@/config/database"
import Comment from "@/models/commentModel";
import Reply from "@/models/replyModel";
import User from "@/models/userModel";
import { CreateReplyResponseType } from "@/types";
import { ReplySchemaType } from "@/validations/replySchema";
import mongoose from "mongoose";

type CreateReplyProps = {
    reply: ReplySchemaType;
    creatorId: string;
    commentId: string;
    replyingTo: string;
}

export async function createReply({ reply, creatorId, commentId, replyingTo }: CreateReplyProps): Promise<CreateReplyResponseType> {
    try {
        await connectDB();

        const creator = await User.findOne({ clerkId: creatorId })

        if (!creator) return { error: "User not found" }

        if (!mongoose.Types.ObjectId.isValid(commentId)) return { error: "Comment not found" }

        const existingComment = await Comment.findById(commentId)

        if (!existingComment) return { error: "Comment not found" }

        const newReply = await Reply.create({
            content: reply.reply,
            user: creator._id,
            replyingTo
        })

        existingComment.replies.push(newReply._id)

        await Comment.findByIdAndUpdate(commentId, existingComment, { new: true })

        console.log(JSON.parse(JSON.stringify(newReply)))

        return { data: JSON.parse(JSON.stringify(newReply)), message: "Reply created" }
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}