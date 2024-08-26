import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { SAMPLE_TODOS } from "../constants/sample-todo";
function TodoContainer() {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const addTodos = function (addTodo) {
    setTodos([...todos, addTodo]);
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
    console.log(updateTodos);
  };
  const deleteUpdated = function (id) {
    const deletedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deletedTodos);
  };
  return (
    <div>
      <TodoForm addTodos={addTodos} />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteUpdated={deleteUpdated}
      />
    </div>
  );
}
export default TodoContainer;
