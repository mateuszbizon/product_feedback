import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return 
    }

    if (!process.env.MONGO_DB_URI) {
        console.log("Missing Mongo DB URI")
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Mongo DB connected")
        return
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;