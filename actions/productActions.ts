"use server"

import connectDB from "@/config/database"
import { PRODUCT_FILTERS_LIST, ROADMAP_IN_PROGRESS_TEXT, ROADMAP_LIVE_TEXT, ROADMAP_PLANNED_TEXT } from "@/constants";
import Comment from "@/models/commentModel";
import ProductFeedback from "@/models/productFeedbackModel";
import Reply from "@/models/replyModel";
import User from "@/models/userModel";
import { CreateProductResponseType, GetAllProductsResponseType, GetRoadmapProductsResponseType, GetSingleProductResponseType } from "@/types";
import { ProductSchemaType } from "@/validations/productSchema";
import mongoose, { model } from "mongoose";

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

type GetSingleProductProps = {
    productId: string;
}

export async function getSingleProduct({ productId }: GetSingleProductProps): Promise<GetSingleProductResponseType> {
    try {
        await connectDB();

        if (!mongoose.Types.ObjectId.isValid(productId)) return { error: "Product not found" }

        const product = await ProductFeedback.findById(productId).populate([
            {
                path: "comments",
                model: Comment,
                populate: [
                    {
                        path: "replies",
                        model: Reply,
                        populate: {
                            path: "user",
                            model: User,
                        }
                    },
                    {
                        path: "user",
                        model: User,
                    }
                ],
            },
            {
                path: "creator",
                model: User,
            }
        ])

        if (!product) return { error: "Product not found" }

        console.log(JSON.parse(JSON.stringify(product)))

        return { data: JSON.parse(JSON.stringify(product)), message: "product retrieved" }
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}