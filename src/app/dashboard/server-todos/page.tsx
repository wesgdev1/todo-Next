export const dynamic = "force-dynamic";
export const revalidate = 0;

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Listado de Todo",
  description: "Rest Todo page",
};

export default async function ServerTodoPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/api/auth/signin");
  }
  const todos = await prisma.todo.findMany({
    where: {
      userId: session?.user.id,
    },
    orderBy: {
      description: "asc",
    },
  });
  return (
    <div>
      <span className="text-4xl mb-36">Server actions</span>
      <div className="w-full px-3 mx-5 mb-5 mt-10">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
