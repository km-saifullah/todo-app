import { Todo } from "../models/todoSchema.js";

// @desc:  get all todo
// @route: GET /api/v1/todos
export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res
      .status(200)
      .json({ status: "success", results: todos.length, data: todos });
  } catch (error) {}
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
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res
      .status(200)
      .json({ status: "success", message: "Todo Updated..!", data: { todo } });
  } catch (error) {
    console.log(error.message);
  }
};

// @desc:  delete a todo
// @route: DELETE /api/v1/todos/:id
export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: "Todo deleted" });
  } catch (error) {}
};
