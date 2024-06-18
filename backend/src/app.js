import express from "express";
import cors from "cors";
import todoRouter from "./routes/todoRoutes.js";

const app = express();

const origin = "*";

// middleware
app.use(express.json());
app.use(cors(origin));

// routes
app.use("/api/v1/todos", todoRouter);

export default app;
