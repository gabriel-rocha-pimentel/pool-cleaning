import Form from "@/components/forms/profile/EditProfile";
import Breadcrumbs from "@/ui/profile/bradcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editar Perfil",
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
            label: "Editar Perfil",
            href: `/dashboard/profile/editProfile`,
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
