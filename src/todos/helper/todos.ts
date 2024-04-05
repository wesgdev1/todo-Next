import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  const body = { completed };

  // aqui hago la peticion a la api
  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

  return todo;
};
