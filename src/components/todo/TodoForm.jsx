import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { postTodo } from "../../api/todoClient";

function TodoForm() {
  const [newTodo, setNewTodo] = useState("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (todo) => postTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!newTodo.trim()) {
      return;
    }

    const addTodo = {
      text: newTodo,
      completed: false,
    };
    mutate(addTodo);
    console.log(addTodo);
    setNewTodo("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center", // 중앙 정렬
          alignItems: "center", // 세로 가운데 정렬
          gap: "10px", // 입력 필드와 버튼 사이 간격
        }}
      >
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
    </>
  );
}
export default TodoForm;
