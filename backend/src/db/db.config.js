import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const db = process.env.DATABASE_URI;

export const connectDb = async () => {
  try {
    await mongoose.connect(db);
    console.log("Database Connected....!");
  } catch (error) {
    console.log(error.message);
  }
};
