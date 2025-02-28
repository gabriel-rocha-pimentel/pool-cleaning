import { lusitana } from "@/ui/fonts/fonts";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/buttons/primaryButton";
import Image from "next/image";

export default async function Page() {
  return (
    <main>
      <h1
        className={`${lusitana.className} mb-4 text-black text-xl md:text-2xl`}
      >
        Perfil
      </h1>

      <section className="w-full h-auto flex flex-col items-end justify-between mb-6">
        {/* Foto de perfil e nome do usuário */}
        <div className="w-full h-auto flex flex-col items-start justify-center p-4 mb-4 bg-gray-50 rounded-md">
          <div className="flex flex-row items-center justify-between">
            <div className="rounded-full w-auto h-auto border-none mr-2">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt="Foto de perfil"
                width={25}
                height={25}
                className="w-8 h-8 rounded-full"
              />
            </div>
            <h2 className="text-black text-base">Gabriel Rocha Pimentel</h2>
          </div>
        </div>

        {/* E-mail do usuário */}
        <div className="w-full h-auto flex flex-col items-start justify-center p-4 mb-4 bg-gray-50 rounded-md">
          <div className="flex flex-row items-center justify-between">
            <div className="rounded-full w-auto h-auto mr-2">
              <EnvelopeIcon
                width={25}
                height={25}
                className="pointer-events-none text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <h2 className="text-black text-base">gabrielrocha@gmail.com</h2>
          </div>
        </div>

        {/* Telefone do usuário */}
        <div className="w-full h-auto flex flex-col items-start justify-center p-4 mb-4 bg-gray-50 rounded-md">
          <div className="flex flex-row items-center justify-between">
            <div className="rounded-full w-auto h-auto mr-2">
              <PhoneIcon
                width={25}
                height={25}
                className="pointer-events-none text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <h2 className="text-black text-base">(38) 9999-9999</h2>
          </div>
        </div>

        {/* Endereço do usuário */}
        <div className="w-full h-auto flex flex-col items-start justify-center p-4 mb-4 bg-gray-50 rounded-md">
          <div className="flex flex-row items-center justify-between">
            <div className="rounded-full w-auto h-auto mr-2">
              <MapPinIcon
                width={25}
                height={25}
                className="pointer-events-none text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <h2 className="text-black text-base">
              Bonfinopolis de Minas Gerais, Rua Belo Horizonte, 305
            </h2>
          </div>
        </div>

        {/* Endereço do usuário */}
        <div className="w-full h-auto flex flex-col items-start justify-center p-4 mb-4 bg-gray-50 rounded-md">
          <div className="flex flex-row items-center justify-between">
            <div className="rounded-full w-auto h-auto mr-2">
              <CalendarDaysIcon
                width={25}
                height={25}
                className="pointer-events-none text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <h2 className="text-black text-base">Agendado para: 25/06/2025</h2>
          </div>
        </div>
      </section>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/profile/editProfile"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          content="no-referrer"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition duration-500 ease-in-out hover:bg-green-600 hover:text-white"
        >
          Editar Perfil
        </Link>
        <Link
          href="/dashboard/profile/editPassword"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          content="no-referrer"
        >
          <Button>Mudar Senha</Button>
        </Link>
      </div>
    </main>
  );
}
