"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
import * as api from "@/todos/helper/todos";
import { updateTodo } from "../helper/todos";
import { useRouter } from "next/navigation";
import { toogleTodo } from "../actions/todo-actions";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  // const toogleTodo = async (id: string, completed: boolean) => {
  //   const updateTodo = await api.updateTodo(id, completed);

  //   router.refresh();
  //   return updateTodo;
  // };
  return (
    <div className="grid grid-col-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} toogleTodo={toogleTodo} />;
      })}
    </div>
  );
};
