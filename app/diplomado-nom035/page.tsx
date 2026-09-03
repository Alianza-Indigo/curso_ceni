import { redirect } from "next/navigation";
import { auth } from "@/auth";
import DiplomadoLanding from "@/components/DiplomadoLanding";
import { modulosDiplomado } from "@/lib/data/diplomado/modulos";

export const metadata = {
  title: "Diplomado NOM-035 ND · Alianza Índigo",
  description:
    "Formación profesional para implementar la NOM-035-STPS-2018 con enfoque de neurodivergencia: 23 módulos, 226 horas, constancia DC-3.",
};

export default async function DiplomadoLandingPage() {
  const session = await auth();
  if (session?.user?.id) redirect("/diplomado");

  // Solo se envían al cliente los datos ligeros (título y duración), no el
  // contenido íntegro de los módulos.
  const modulos = modulosDiplomado.map((m) => ({
    numero: m.numero,
    titulo: m.titulo,
    duracion: m.duracion,
  }));

  return <DiplomadoLanding modulos={modulos} />;
}
