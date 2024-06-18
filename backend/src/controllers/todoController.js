import { Todo } from "../models/todoSchema.js";

// @desc:  get all todo
// @route: GET /api/v1/todos
export const getAllTodo = (req, res) => {
  return res.status(200).json({ status: "success", data: "Hello" });
};

// @desc:  get all todo
// @route: POST /api/v1/todos
export const createTodo = async (req, res) => {
  const { title } = req.body;
  try {
    const todo = await Todo.create({ title });
    return res.status(201).json({
      status: "success",
      message: "Todo Created",
      results: todo.length,
      data: todo,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// @desc:  get a todo
// @route: GET /api/v1/todos/:id
export const getATodo = (req, res) => {};

// @desc:  update a todo
// @route: PATCH /api/v1/todos/:id
export const updateTodo = (req, res) => {};

// @desc:  delete a todo
// @route: DELETE /api/v1/todos/:id
export const deleteTodo = (req, res) => {};
