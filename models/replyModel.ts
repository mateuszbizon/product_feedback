import { model, models, Schema } from "mongoose";

const replySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    replyingTo: { type: String, required: true },
})

const Reply = models.Reply || model("Reply", replySchema);

export default Reply;