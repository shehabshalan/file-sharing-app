import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI!);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
