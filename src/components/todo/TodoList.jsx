import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../../api/todoClient";

function TodoList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  if (isLoading) {
    return <div>로딩중입니다</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);

  return (
    <>
      <ul className="main-center">
        {data?.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
}
export default TodoList;
