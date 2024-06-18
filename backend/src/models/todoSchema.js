import mongoose, { Schema } from "mongoose";

const todosSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Todo = mongoose.model("Todo", todosSchema);
