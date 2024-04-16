import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(`Connected to Mongodb Database`);

    } catch (error) {
        console.log(`Error in Mongodb ${error}`);       
    }
};

export default connectDB;