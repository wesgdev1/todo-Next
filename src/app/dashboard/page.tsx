import { auth } from "@/auth";
import { WidgetItem } from "@/components";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  //
  const session = await auth();
  if (!session) {
    // redirect("/api/auth/signin");
    redirect("/");
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 h-screen ">
      {/* TODO: src/components <WidgetItem /> */}
      <WidgetItem title={`Usuario conectado: ${session?.user?.name} `}>
        <div className="flex flex-col text-center">Informacion de sesion</div>
        <div>
          <div className="flex flex-col text-center">
            <h1>Nombre: {session?.user?.name}</h1>
            <h1>Email: {session?.user?.email}</h1>
            <h1>Roles: {session?.user?.roles}</h1>
          </div>
        </div>
      </WidgetItem>
      {/* <WidgetItem />
      <WidgetItem />
      <WidgetItem /> */}

      {/* TODO: Fin <WidgetItem /> */}
    </div>
  );
}
