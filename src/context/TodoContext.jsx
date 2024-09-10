import { createContext, useEffect, useState } from "react";
import { SAMPLE_TODOS } from "../components/constants/sample-todo";
import axios from "axios";
import { todoClient } from "../api/todoClient";

export const TodoContext = createContext();
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await todoClient.get("/");

    setTodos(data);
  };

  const addTodos = async function (addTodo) {
    const { data } = await todoClient.post("/", addTodo);
    fetchTodos();
  };

  const toggleCompleted = async function (id, completed) {
    const { data } = await todoClient.patch(`/${id}`, {
      completed,
    });
    console.log(data);
    fetchTodos();
  };

  const deleteUpdated = async function (id) {
    const { data } = await todoClient.delete(`/${id}`);
    console.log(data);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{ addTodos, todos, toggleCompleted, deleteUpdated }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
