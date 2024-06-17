import express from "express";
import todoRouter from "./routes/todoRoutes.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/todos", todoRouter);

export default app;
