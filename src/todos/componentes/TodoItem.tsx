"use client";
import { Todo } from "@prisma/client";
import { startTransition, useOptimistic } from "react";

import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
// import { toogleTodo } from "../actions/todo-actions";

interface Props {
  todo: Todo;
  toogleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
  // TODO: Add actions
}

export const TodoItem = ({ todo, toogleTodo }: Props) => {
  const [todoOptimistic, toogleTodoOptimistic] = useOptimistic(
    todo,

    (state, newCompleteValue: boolean) => ({
      ...state,
      completed: newCompleteValue,
    })
  );

  const onToogleTodo = async () => {
    console.log("onToogleTodo");
    try {
      startTransition(() => toogleTodoOptimistic(!todoOptimistic.completed));
      await toogleTodo(todoOptimistic.id, !todoOptimistic.completed);
    } catch (error) {
      startTransition(() => toogleTodoOptimistic(!todoOptimistic.completed));
    }
  };

  return (
    <div
      className={
        todoOptimistic.completed ? styles.todoDone : styles.todoPending
      }
    >
      <div className="flex flex-col sm: flex-row justify-start items-center gap-4">
        <div
          onClick={
            onToogleTodo
            // toogleTodo(todoOptimistic.id, !todoOptimistic.completed)
          }
          className={`
        flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100
        ${todoOptimistic.completed ? "text-blue-500" : "text-blue-300"}
        
        `}
        >
          {todoOptimistic.completed ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">
          {todoOptimistic.description}
        </div>
      </div>
    </div>
  );
};
