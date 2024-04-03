import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  const todo = await prisma.todo.createMany({
    data: [
      { description: "Buy groceries" },
      { description: "Walk the dog" },
      { description: "Watch TV", completed: true },
    ],
  });

  console.log(todo);
  return NextResponse.json({ message: "Seed realizado" });
}
