import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [title, setTitle] = useState("");

  // get todo
  const getTodo = async () => {
    try {
      const todo = await axios.get("http://localhost:8000/api/v1/todos");
      console.log(todo);
    } catch (error) {}
  };
  getTodo();

  const handleTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/todos", { title });
    } catch (error) {
      console.log(error.message);
    }
    setTitle("");
  };
  return (
    <section>
      <div className="h-[100vh] flex items-center justify-center gap-2">
        <form action="" className="flex items-center gap-x-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Your Todo"
          />
          <button onClick={handleTodo}>Add Todo</button>
        </form>
      </div>
    </section>
  );
};

export default Home;
