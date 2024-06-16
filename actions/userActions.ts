"use server"

import connectDB from "@/config/database"
import User from "@/models/userModel";
import { CreateUserType } from "@/types"

export const createUser = async (user: CreateUserType) => {
    try {
        await connectDB();

        const newUser = await User.create(user);

        console.log('user created')
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error)
    }
}