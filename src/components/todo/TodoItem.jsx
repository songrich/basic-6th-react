function TodoItem({ todo, toggleCompleted, deleteUpdated }) {
  return (
    <li key={todo.id}>
      <p>
        {todo.text} - {todo.completed ? "완료됨" : "실행중"}
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
}
export default TodoItem;
