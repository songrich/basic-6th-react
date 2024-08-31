import { createContext, useState } from "react";
import { SAMPLE_TODOS } from "../components/constants/sample-todo";

export const TodoContext = createContext();
const TodoProvider = ({ children }) => {
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
    <TodoContext.Provider
      value={{ addTodos, todos, toggleCompleted, deleteUpdated }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
