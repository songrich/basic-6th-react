import React, { useContext } from "react";
import TodoItem from "./TodoItem";

import { TodoContext } from "../../context/TodoContext";

function TodoList() {
  const { todos, toggleCompleted, deleteUpdated } = useContext(TodoContext);
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
