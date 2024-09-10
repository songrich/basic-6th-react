import React, { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoForm() {
  const { addTodos } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!newTodo.trim()) {
      return;
    }

    const addTodo = {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };
    addTodos(addTodo);
    setNewTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodo}
          onChange={function (e) {
            setNewTodo(e.target.value);
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
