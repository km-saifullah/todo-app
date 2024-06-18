import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  // get todo
  const getTodo = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/todos");
      console.log(data.data);
      setTodo(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getTodo();
  }, []);

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

  // update
  const handleUpdate = (id) => {
    
  };

  // delete
  const handleDelete = () => {};
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-center gap-2 py-5">
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
      <div className="flex items-center justify-center gap-2">
        <ul className="flex items-center justify-between flex-col-reverse">
          {todo.map((item) => (
            <li className="flex items-center gap-x-4" key={item._id}>
              {item.title}
              <div className="flex items-center gap-x-3">
                <button onClick={() => handleUpdate(id)}>Update</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
