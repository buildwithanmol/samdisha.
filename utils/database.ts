import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.log("Please add URI for connection!");
        }

        if (mongoose.connection.readyState === 1) {
            return mongoose.connection.asPromise();
        }

        return await mongoose.connect(process.env.MONGO_URI as string);

    } catch (error: any) {
        console.log(error.message);
    }
};