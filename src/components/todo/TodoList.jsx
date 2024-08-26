import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleCompleted, deleteUpdated }) {
  return (
    <>
      <ul className="main-center">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteUpdated={deleteUpdated}
            />
          );
        })}
      </ul>
    </>
  );
}
export default TodoList;
