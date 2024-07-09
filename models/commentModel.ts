import { model, models, Schema } from "mongoose";

const commentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    replies: { type: [Schema.Types.ObjectId], ref: "Reply", default: [] }
})

const Comment = models.Comment || model("Comment", commentSchema)

export default Comment;