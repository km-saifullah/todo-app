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
    } catch (error) {
      console.log("Error fetching todos:", error.message);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  // add todo
  const handleTodo = async (e) => {
    e.preventDefault();
    try {
      if (title) {
        const response = await axios.post(
          "http://localhost:8000/api/v1/todos",
          {
            title,
          }
        );
        getTodo();
        setTitle("");
      } else {
        alert("Please Enter a Todo");
      }
    } catch (error) {
      console.error(
        "Error adding todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // start update process
  const handleUpdate = (id, updateTitle) => {
    setTodoId(id);
    setCurrentTitle(updateTitle);
    setIsUpdating(true);
  };

  // finalize update
  const handleUpdateInputField = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/v1/todos/${todoId}`,
        {
          title: currentTitle,
        }
      );
      getTodo();
      setIsUpdating(false);
      setCurrentTitle("");
      setTodoId("");
    } catch (error) {
      console.error(
        "Error updating todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // delete todo
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/todos/${id}`
      );
      getTodo();
    } catch (error) {
      console.error(
        "Error deleting todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <section className="space-y-1">
      <div className="pt-4 flex items-center justify-center">
        <h1 className="text-[35px] text-[#222] font-mono font-semibold">
          Todo App
        </h1>
      </div>
      <div className="flex items-center justify-center gap-2 py-5">
        <form className="flex items-center gap-x-4">
          <input
            type="text"
            value={isUpdating ? currentTitle : title}
            onChange={(e) => {
              isUpdating
                ? setCurrentTitle(e.target.value)
                : setTitle(e.target.value);
            }}
            placeholder="Enter Your Todo"
            className="border p-3 rounded text-[#181818]"
          />
          {isUpdating ? (
            <button
              className="bg-orange-500 p-3 rounded text-white font-semibold"
              onClick={handleUpdateInputField}
            >
              Update Todo
            </button>
          ) : (
            <button
              className="bg-green-500 p-3 rounded text-white font-semibold"
              onClick={handleTodo}
            >
              Add Todo
            </button>
          )}
        </form>
      </div>
      <div className="flex items-center justify-center gap-2">
        <ul className="flex items-center justify-between flex-col-reverse gap-y-8">
          {todo.map((item) => (
            <li className="w-[100%] flex items-center gap-x-8" key={item._id}>
              <p className="text-[#181818] font-normal text-[18px] w-[80%] capitalize">
                {item.title}
              </p>
              <div className="flex items-center justify-center gap-x-3 w-[20%]">
                <button
                  className="bg-orange-500 p-2 rounded text-white font-semibold"
                  onClick={() => handleUpdate(item._id, item.title)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 p-2 rounded text-white font-semibold"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
