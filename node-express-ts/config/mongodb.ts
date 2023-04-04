import mongoose from "mongoose";

const connectDB = async (databaseURL: string): Promise<void> => {
  try {
    await mongoose.connect(databaseURL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("There is an ERROR ", err);
  }
};

export default connectDB;
