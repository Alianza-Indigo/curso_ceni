import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { formatosDiplomado, glosarioDiplomado } from "@/lib/data/diplomado/materiales";
import { ArrowLeft, FileDown, BookOpen } from "lucide-react";

export const metadata = { title: "Materiales · Diplomado NOM-035 ND" };

export default async function MaterialesDiplomadoPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/diplomado"
        className="mb-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#4b18a8] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Volver al diplomado
      </Link>

      <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">
        Diplomado NOM-035 ND
      </p>
      <h1 className="mt-1 font-serif text-4xl font-black text-[#070b2f]">Materiales y plantillas</h1>
      <p className="mt-3 max-w-2xl text-[#20234a]">
        Instrumentos de trabajo descargables para implementar la NOM-035 con enfoque de
        neurodivergencia. Son plantillas del diplomado: adáptalas a tu organización.
      </p>

      <section className="mt-8">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#070b2f]">
          <FileDown className="h-5 w-5 text-[#4b18a8]" /> Plantillas descargables
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {formatosDiplomado.map((f) => (
            <li key={f.codigo}>
              <a
                href={f.archivo}
                download
                className="flex h-full flex-col gap-1 rounded-xl border border-[#e5def4] bg-white p-4 transition-colors hover:border-[#4b18a8] hover:bg-[#f5f1ff]"
              >
                <span className="flex items-center gap-2">
                  <span className="font-black text-[#dda632]">{f.codigo}</span>
                  <span className="inline-block rounded bg-[#f3eefc] px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-[#4b18a8]">
                    {f.formato}
                  </span>
                </span>
                <span className="font-bold text-[#20234a]">{f.nombre}</span>
                <span className="text-xs text-[#6c6690]">{f.modulo}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#070b2f]">
          <BookOpen className="h-5 w-5 text-[#4b18a8]" /> Glosario
        </h2>
        <dl className="mt-4 divide-y divide-[#eee9f7] rounded-2xl border border-[#e5def4] bg-white">
          {glosarioDiplomado.map((g) => (
            <div key={g.termino} className="px-5 py-4">
              <dt className="font-bold text-[#070b2f]">{g.termino}</dt>
              <dd className="mt-1 text-sm text-[#20234a]">{g.definicion}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
