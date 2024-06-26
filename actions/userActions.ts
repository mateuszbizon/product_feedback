"use server"

import connectDB from "@/config/database"
import User from "@/models/userModel";
import { CreateUserType } from "@/types"

type CreateUserProps = {
    user: CreateUserType;
}

export const createUser = async ({ user }: CreateUserProps) => {
    try {
        await connectDB();

        const newUser = await User.create(user);

        return { data: JSON.parse(JSON.stringify(newUser)), message: "user created" };
    } catch (error) {
        console.log(error)
    }
}