import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test1@gmail.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin"],
      todos: {
        create: [
          { description: "Buy groceries" },
          { description: "Walk the dog" },
          { description: "Watch TV", completed: true },
        ],
      },
    },
  });

  // const todo = await prisma.todo.createMany({
  //   data: [
  //     { description: "Buy groceries" },
  //     { description: "Walk the dog" },
  //     { description: "Watch TV", completed: true },
  //   ],
  // });

  return NextResponse.json({ message: "Seed realizado" });
}
