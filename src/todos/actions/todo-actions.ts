"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toogleTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });

  if (!todo) {
    throw "Todo not found";
  }

  const updatedTodo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed,
    },
  });
  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const addTodo = async (description: string) => {
  try {
    const todo = await prisma.todo.create({
      data: {
        description,
      },
    });
    revalidatePath("/dashboard/server-todos");
    return todo;
  } catch (error) {
    return {
      message: "Error al crear el todo",
    };
  }
};

export const deleteCompleted = async () => {
  try {
    await prisma.todo.deleteMany({
      where: {
        completed: true,
      },
    });
    revalidatePath("/dashboard/server-todos");
    return;
  } catch (error) {
    return {
      message: "Error al eliminar los todos completados",
    };
  }
};
