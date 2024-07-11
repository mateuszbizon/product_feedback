"use server"

import connectDB from "@/config/database"
import { PRODUCT_FILTERS_LIST } from "@/constants";
import ProductFeedback from "@/models/productFeedbackModel";
import User from "@/models/userModel";
import { CreateProductResponseType, GetAllProductsResponseType } from "@/types";
import { ProductSchemaType } from "@/validations/productSchema";

type CreateProductFeedbackProps = {
    product: ProductSchemaType;
    creatorId: string;
}

export async function createProductFeedback({ product, creatorId }: CreateProductFeedbackProps): Promise<CreateProductResponseType> {
    try {
        await connectDB();

        const productCreator = await User.findOne({ clerkId: creatorId })

        if (!productCreator) return { error: "User not found" }

        const newProduct = await ProductFeedback.create({
            ...product,
            creator: productCreator._id,
        });

        console.log(JSON.parse(JSON.stringify(newProduct)))

        return { data: JSON.parse(JSON.stringify(newProduct)), message: "product feedback created" }
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}

type GetAllProductsProps = {
    category: string
}

export async function getAllProducts({ category }: GetAllProductsProps): Promise<GetAllProductsResponseType> {
    try {
        let productCategory = category;

        await connectDB();

        if (!PRODUCT_FILTERS_LIST.includes(category)) {
            productCategory = PRODUCT_FILTERS_LIST[0];
        }

        const products = await ProductFeedback.find({ category: productCategory })

        console.log(JSON.parse(JSON.stringify(products)))

        return { data: JSON.parse(JSON.stringify(products)), message: "products retrieved" }
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}