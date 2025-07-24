import mongoose from "mongoose";

const connectDB = async () => {
  try {

    // await mongoose.connect(process.env.MONGO_DB);
    await mongoose.connect(process.env.MONGO_DB);
    console.log("MONGODB connected Succesfully");
  } catch (error) {
    console.error("mongobd failed to connect");
    process.exit(1);
  }
};

export default connectDB;
