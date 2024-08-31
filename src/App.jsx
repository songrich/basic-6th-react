import RootLayout from "./components/layout/RootLayout";
import TodoContainer from "./components/todo/TodoContainer";
import TodoForm from "./components/todo/TodoForm";
import TodoItem from "./components/todo/TodoItem";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <RootLayout>
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    </RootLayout>
  );
}
export default App;
