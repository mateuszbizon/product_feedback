"use server"

import connectDB from "@/config/database"
import { PRODUCT_FILTERS_LIST, ROADMAP_IN_PROGRESS_TEXT, ROADMAP_LIVE_TEXT, ROADMAP_PLANNED_TEXT } from "@/constants";
import ProductFeedback from "@/models/productFeedbackModel";
import User from "@/models/userModel";
import { CreateProductResponseType, GetAllProductsResponseType, GetRoadmapProductsResponseType } from "@/types";
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

export async function getRoadmapProducts(): Promise<GetRoadmapProductsResponseType> {
    try {
        await connectDB();

        const plannedProducts = await ProductFeedback.find({ status: ROADMAP_PLANNED_TEXT })

        const liveProducts = await ProductFeedback.find({ status: ROADMAP_LIVE_TEXT })

        const inProgressProducts = await ProductFeedback.find({ status: ROADMAP_IN_PROGRESS_TEXT })

        return { 
            data: {
                plannedProducts: JSON.parse(JSON.stringify(plannedProducts)),
                liveProducts: JSON.parse(JSON.stringify(liveProducts)),
                inProgressProducts: JSON.parse(JSON.stringify(inProgressProducts)),
            }, 
            message: "roadmap products retrieved" 
        }
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}