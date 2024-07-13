"use server"

import connectDB from "@/config/database"
import { PRODUCT_FILTERS_LIST, ROADMAP_IN_PROGRESS_TEXT, ROADMAP_LIVE_TEXT, ROADMAP_PLANNED_TEXT } from "@/constants";
import Comment from "@/models/commentModel";
import ProductFeedback from "@/models/productFeedbackModel";
import Reply from "@/models/replyModel";
import User from "@/models/userModel";
import { CreateProductResponseType, DeleteProductResponseType, EditProductFeedbackResponseType, GetAllProductsResponseType, GetRoadmapProductsResponseType, GetSingleProductResponseType } from "@/types";
import { ProductSchemaType } from "@/validations/productSchema";
import mongoose from "mongoose";

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

        const products = await ProductFeedback.find({ category: productCategory, status: "Suggestion" })

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

type EditProductFeedbackProps = {
    productId: string;
    product: ProductSchemaType;
    creatorId: string;
}

export async function editProductFeedback({ productId, product, creatorId }: EditProductFeedbackProps): Promise<EditProductFeedbackResponseType> {
    try {
        await connectDB();

        const productCreator = await User.findOne({ clerkId: creatorId })

        if (!productCreator) return { error: "User not found" }

        if (!mongoose.Types.ObjectId.isValid(productId)) return { error: "Product not found" }

        const existingProduct = await ProductFeedback.findById(productId);

        if (existingProduct.creator.toString() !== productCreator._id.toString()) return { error: "Not author" }

        const editedProduct = await ProductFeedback.findByIdAndUpdate(productId, { ...product }, { new: true })

        console.log(JSON.parse(JSON.stringify(editedProduct)))

        return { data: JSON.parse(JSON.stringify(editedProduct)), message: "Product feedback edited" }
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}

type DeleteProductProps = {
    productId: string;
    creatorId: string;
}

export async function deleteProduct({ productId, creatorId }: DeleteProductProps): Promise<DeleteProductResponseType> {
    try {
        await connectDB();

        const productCreator = await User.findOne({ clerkId: creatorId })

        if (!productCreator) return { error: "User not found" }

        if (!mongoose.Types.ObjectId.isValid(productId)) return { error: "Product not found" }

        const existingProduct = await ProductFeedback.findById(productId);

        if (existingProduct.creator.toString() !== productCreator._id.toString()) return { error: "Not author" }

        const deletedProduct = await ProductFeedback.findByIdAndDelete(productId)

        console.log(JSON.parse(JSON.stringify(deletedProduct)))

        return { data: JSON.parse(JSON.stringify(deletedProduct)), message: "Product deleted" }
    } catch (error: any) {
        console.log(error)
        return { error: error.message }
    }
}