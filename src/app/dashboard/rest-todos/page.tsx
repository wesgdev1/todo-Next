import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata = {
  title: "Listado de Todo",
  description: "Rest Todo page",
};

export default async function RestTodoPage() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      description: "asc",
    },
  });
  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}
