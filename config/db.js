import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to mongodb database`.bgGreen.white);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white);
        
    }
};

export default connectDB;