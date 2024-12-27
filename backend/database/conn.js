import mongoose from "mongoose";

export default async function connect(){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database Connected");
    } catch (error) {
        console.log("Invalid Database Connection");
    }
}