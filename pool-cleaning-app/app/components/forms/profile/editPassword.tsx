"use client";

import Link from "next/link";
import { UserCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/buttons/primaryButton";

export default function UserDataForm() {
  return (
    <form action="">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Senha atual */}
        <div className="mb-4">
          <label
            htmlFor="currentPassword"
            className="mb-2 block text-black text-sm font-medium"
          >
            Senha Atual
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="currentPassword"
                name="currentPassword"
                type="text"
                placeholder="Insira sua senha atual..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Nova Senha */}
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="mb-2 text-black block text-sm font-medium"
          >
            Nova Senha
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="newPassword"
                name="newPassword"
                type="text"
                placeholder="Insira sua nova senha..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Confirmar Senha */}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="mb-2 text-black block text-sm font-medium"
          >
            Confirmar Senha
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="text"
                placeholder="Confirme sua nova senha..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/profile"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition duration-500 ease-in-out hover:bg-red-600 hover:text-white"
          >
            Cancelar
          </Link>
          <Button type="submit">Salvar Alteração</Button>
        </div>
      </div>
    </form>
  );
}
