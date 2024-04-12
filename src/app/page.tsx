"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoLogoGoogle } from "react-icons/io5";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    redirect("/dashboard");
  }

  const onHandleGoogleLogin = async () => {
    const response = await signIn("google", { callbackUrl: "/dashboard" });
    console.log(response);
    if (response?.ok) {
      redirect("/dashboard");
    }
  };

  // si la respuesta es ok reenviar a dashboard

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black pt-20">
        <div className="bg-black text-white flex flex-col items-center gap-3 ">
          <h1 className="text-5xl">Todo List APP</h1>
          <hr />
          <p>Next 14 | PostgreSql </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center bg-black items-center gap-3 h-screen">
          <div>
            {/*Imagen de presentacion*/}

            <Image
              src={
                "https://static.vecteezy.com/system/resources/previews/010/063/551/original/todo-list-icon-notepad-with-completed-todo-list-and-pencil-3d-render-png.png"
              }
              width={500}
              height={500}
              alt="presentacion"
            />
          </div>
          <div>
            {/*Formulario de inicio de sesion por redes */}
            <div>
              {/* Boton de google*/}

              <button
                onClick={onHandleGoogleLogin}
                className={`px-4 border border-cyan-50 py-3 flex items-center space-x-4 rounded-md text-white group
        hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white bg-black
       
        `}
              >
                <IoLogoGoogle />
                <span>Ingresar por Google</span>
              </button>
              <button
                className={`px-4 border border-cyan-50 py-3 flex items-center space-x-4 rounded-md text-white group
        hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white bg-black
       
        `}
              >
                <IoLogoGoogle />
                <span>Ingresar por Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
