import { model, models, Schema } from "mongoose";

const productFeedbackSchema = new Schema({
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    details: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, required: true },
    upVotes: { type: [String], default: [] },
    comments: { type: [Schema.Types.ObjectId], ref: "Comment", default: [] },
})

const ProductFeedback = models.ProductFeedback || model("ProductFeedback", productFeedbackSchema)

export default ProductFeedback;