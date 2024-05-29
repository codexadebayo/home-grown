import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongooseDb connected`);
    } catch (error) {

        console.log(`connecting string ${process.env.MONGO_URI}`);
        console.log(`${error.message}`)

        process.exit(1);   
    }
}


export default connectDB;