import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUpdated, toggleCompleted } from "../../api/todoClient";

function TodoItem({ todo }) {
  const queryClient = useQueryClient();

  const { mutate: handleDelete } = useMutation({
    mutationFn: (id) => deleteUpdated(id),
    onSuccess: queryClient.invalidateQueries(["todos"]),
  });
  const { mutate: handleToggle } = useMutation({
    mutationFn: ({ id, completed }) => toggleCompleted(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  if (!todo) {
    return null;
  }
  return (
    <li key={todo.id}>
      <p>
        {todo.text} - {todo.completed ? "완료됨" : "실행중"}
      </p>
      <button
        onClick={() => {
          handleToggle({ id: todo.id, completed: !todo.completed });
        }}
      >
        완료
      </button>
      <button
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}
export default TodoItem;
