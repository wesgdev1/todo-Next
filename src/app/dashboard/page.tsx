import { auth } from "@/auth";
import { WidgetItem } from "@/components";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  //
  const session = await auth();
  if (!session) {
    redirect("api/auth/signin");
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      {/* TODO: src/components <WidgetItem /> */}
      <WidgetItem title={`Usuario conectado:${session?.user?.name} `} />
      {/* <WidgetItem />
      <WidgetItem />
      <WidgetItem /> */}

      {/* TODO: Fin <WidgetItem /> */}
    </div>
  );
}
