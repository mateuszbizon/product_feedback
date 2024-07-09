"use server"

import connectDB from "@/config/database"
import ProductFeedback from "@/models/productFeedbackModel";
import User from "@/models/userModel";
import { CreateProductResponseType, ErrorResponseType } from "@/types";
import { ProductSchemaType } from "@/validations/productSchema";

type CreateProductFeedbackProps = {
    product: ProductSchemaType;
    creatorId: string;
}

export async function createProductFeedback({ product, creatorId }: CreateProductFeedbackProps): Promise<CreateProductResponseType | ErrorResponseType> {
    try {
        await connectDB();

        const productCreator = await User.findOne({ clerkId: creatorId })

        if (!productCreator) return { error: "User not found" }

        const newProduct = await ProductFeedback.create({
            ...product,
            creator: productCreator._id,
        });

        return { data: JSON.parse(JSON.stringify(newProduct)), message: "product feedback created" }
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}