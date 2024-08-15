import React from "react";
import { useState } from "react";
const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Clean the house" },
  { id: 3, text: "Go for a run" },
  { id: 4, text: "Finish homework" },
  { id: 5, text: "Call mom" },
  { id: 6, text: "Buy groceries" },
  { id: 7, text: "Walk the dog" },
  { id: 8, text: "Read a book" },
  { id: 9, text: "Do laundry" },
  { id: 10, text: "Write code" },
];

function TodoList() {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!newTodo.trim()) {
      return;
    }

    const addTodo = {
      id: crypto.randomUUID(),
      text: newTodo,
    };
    setTodos([...todos, addTodo]);
    setNewTodo("");
  };
  return (
    <div>
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
      <ul className="main-center">
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text} </li>;
        })}
      </ul>
    </div>
  );
}
export default TodoList;
