"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Perfil de usuario</h1>
      <hr />

      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-10">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
            type="button"
          ></button>
        </div>
        <div className="flex flex-col items-center pb-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={session?.user?.image || "/img/avatar.png"}
            alt="image Profile"
            width={96}
            height={96}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {session?.user?.name ?? "no-name"}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {session?.user?.email ?? "no-name"}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {session?.user?.roles ?? "no-name"}
          </span>
        </div>
      </div>
    </div>
  );
}
