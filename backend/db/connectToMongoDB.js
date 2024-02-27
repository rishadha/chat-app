import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_DB_URI)
       console.log("Connect to the MongoDB");

    } catch (error) {
        console.log("Error Conecting to MongoDB",error.message);
    }
}
export default connectToMongoDB;