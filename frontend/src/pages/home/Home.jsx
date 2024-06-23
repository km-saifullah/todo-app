import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [todoId, setTodoId] = useState("");

  // get todo
  const getTodo = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/todos");

      setTodo(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getTodo();
  }, []);

  // add todo
  const handleTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/todos", { title });
      getTodo();
    } catch (error) {
      console.log(error.message);
    }
    setTitle("");
  };

  // update todo
  const handleUpdate = async (id, updateTitle) => {
    setTodoId(id);
    setCurrentTitle(updateTitle);
    setIsUpdating(true);
  };

  const handleUpdateInputField = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("http://localhost:8000/api/v1/todos");
    console.log(data);
    let newData = data.data;

    newData.map(async (item) => {
      if (todoId === item._id) {
        console.log(item._id, item.title);
        await axios.patch(`http://localhost:8000/api/v1/todos/${todoId}`, {
          title: item.title,
        });
      }
    });
  };

  // delete todo
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/todos/${id}`);
      getTodo();
    } catch (error) {}
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-center gap-2 py-5">
        <form className="flex items-center gap-x-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Your Todo"
            className="border p-3 rounded text-red-400"
          />
          {isUpdating ? (
            <button onClick={handleUpdateInputField}>Update Todo</button>
          ) : (
            <button onClick={handleTodo}>Add Todo</button>
          )}
        </form>
      </div>
      <div className="flex items-center justify-center gap-2">
        <ul className="flex items-center justify-between flex-col-reverse">
          {todo.map((item) => (
            <li className="w-[50%] flex items-center gap-x-4" key={item._id}>
              {item.title}
              <div className="w-[50%] flex items-center gap-x-3">
                <button onClick={(e) => handleUpdate(item._id, item.title)}>
                  Update
                </button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
