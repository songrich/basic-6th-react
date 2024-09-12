import axios from "axios";

export const todoClient = axios.create({
  baseURL: "http://localhost:4000/todos",
});

export const fetchTodos = async () => {
  const { data } = await todoClient.get("/");

  return data;
};

export const postTodo = async function (addTodo) {
  const { data } = await todoClient.post("/", addTodo);
  return data;
};

export const toggleCompleted = async function (id, completed) {
  const { data } = await todoClient.patch(`/${id}`, {
    completed,
  });
  return data;
};

export const deleteUpdated = async function (id) {
  const { data } = await todoClient.delete(`/${id}`);
  return data;
};
