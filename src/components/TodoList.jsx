import React from "react";
import { useState } from "react";
const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
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

  const toggleCompleted = function (id) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };
  const deleteUpdated = function (id) {
    const deletedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deletedTodos);
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
          return (
            <li key={todo.id}>
              <p>
                {todo.text} - {String(todo.completed)}
              </p>
              <button
                onClick={function () {
                  toggleCompleted(todo.id);
                }}
              >
                완료
              </button>
              <button
                onClick={function () {
                  deleteUpdated(todo.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TodoList;
