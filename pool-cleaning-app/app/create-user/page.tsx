import AcmeLogo from "@/ui/acmeLogo";
import CreateUserForm from "@/ui/create-user/createUserForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar Conta",
};

export default function LoginPage() {
  return (
    <main className="flex bg-white items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:mt-3">
        <div className="flex h-20 w-full items-center rounded-lg bg-blue-500 md:h-28">
          <div className="flex items-center justify-center w-32 text-white md:w-full">
            <AcmeLogo />
          </div>
        </div>
        <CreateUserForm />
      </div>
    </main>
  );
}
