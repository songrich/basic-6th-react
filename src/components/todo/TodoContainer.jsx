import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { SAMPLE_TODOS } from "../constants/sample-todo";
import { TodoContext } from "../../context/TodoContext";
function TodoContainer() {
  return (
    <div>
      <TodoForm />

      <TodoList />
    </div>
  );
}
export default TodoContainer;
