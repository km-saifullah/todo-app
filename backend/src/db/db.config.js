import mongoose from "mongoose";

const db = process.env.DATABSE_URI;

export const connectDb = async () => {
  try {
    await mongoose.connect(db);
    console.log("Database Connected....!");
  } catch (error) {
    console.log(error.message);
  }
};
