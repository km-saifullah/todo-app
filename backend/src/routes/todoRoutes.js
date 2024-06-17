import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getATodo,
  getAllTodo,
  updateTodo,
} from "../controllers/todoController.js";

const router = Router();

router.route("/").get(getAllTodo).post(createTodo);
router.route("/:id").get(getATodo).patch(updateTodo).delete(deleteTodo);

export default router;
