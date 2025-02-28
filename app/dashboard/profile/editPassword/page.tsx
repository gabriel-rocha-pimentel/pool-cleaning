import Form from "@/components/forms/profile/editPassword";
import Breadcrumbs from "@/ui/profile/bradcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editar Senha",
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Perfil",
            href: "/dashboard/profile",
          },
          {
            label: "Editar Senha",
            href: `/dashboard/profile/editPassword`,
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
