"use server"

import connectDB from "@/config/database"
import Comment from "@/models/commentModel";
import ProductFeedback from "@/models/productFeedbackModel";
import User from "@/models/userModel";
import { BasicResponse, CreateCommentResponseType } from "@/types";
import { CommentSchemaType } from "@/validations/commentSchema";
import mongoose from "mongoose";

type CreateCommentProps = {
    comment: CommentSchemaType;
    creatorId: string;
    productId: string;
}

export async function createComment({ comment, creatorId, productId }: CreateCommentProps): Promise<BasicResponse<CreateCommentResponseType>> {
    try {
        await connectDB();

        const productCreator = await User.findOne({ clerkId: creatorId })

        if (!productCreator) return { error: "User not found" }

        if (!mongoose.Types.ObjectId.isValid(productId)) return { error: "Product not found" }

        const existingProduct = await ProductFeedback.findById(productId);

        if (!existingProduct) return { error: "Product not found" }

        const newComment = await Comment.create({
            content: comment.comment,
            user: productCreator._id,
        })

        existingProduct.comments.unshift(newComment._id)

        await ProductFeedback.findByIdAndUpdate(productId, existingProduct, { new: true })

        console.log(JSON.parse(JSON.stringify(newComment)))

        return { data: JSON.parse(JSON.stringify(newComment)), message: "Comment created" }
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}