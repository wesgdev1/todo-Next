"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Hello Page</h1>
      <hr />
      <div className="flex flex-col">
        <h2>Profile</h2>
        <span>{session?.user?.name ?? "no-name"}</span>
        <span>{session?.user?.email ?? "no-name"}</span>
        <span>{session?.user?.image ?? "no-name"}</span>
        <span>{session?.user?.id ?? "no-name"}</span>
        <span>{session?.user?.roles?.join(",") ?? ["no-name"]}</span>
      </div>
    </div>
  );
}
