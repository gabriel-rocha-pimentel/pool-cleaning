"use client";

import Link from "next/link";
import {
  EnvelopeIcon,
  UserCircleIcon,
  PhotoIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/buttons/primaryButton";

export default function UserDataForm() {
  return (
    <form action="">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Foto */}
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="mb-2 block text-black text-sm font-medium"
          >
            Foto
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="photo"
                name="photo"
                type="file"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-gray-500 outline-2 placeholder:text-gray-500"
              />
              <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Nome */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 text-black block text-sm font-medium"
          >
            Nome
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Insira seu novo nome de usuario..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-black text-sm font-medium"
          >
            E-mail
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Insira o seu novo e-mail..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Telefone */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-black text-sm font-medium"
          >
            Telefone
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder="(38)99999-9999"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="mb-2 block text-black text-sm font-medium"
          >
            Endereço
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Insira o seu novo endereço..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
          <Link
            href="/dashboard/profile"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition duration-500 ease-in-out hover:bg-red-600 hover:text-white">
            Apagar Conta
          </Link>
          <Button type="submit">Salvar Alteração</Button>
        </div>
      </div>
    </form>
  );
}
