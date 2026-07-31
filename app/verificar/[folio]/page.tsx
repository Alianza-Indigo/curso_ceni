import Link from "next/link";
import { buscarConstanciaPorFolio } from "@/lib/progreso-server";
import { CheckCircle2, XCircle, GraduationCap } from "lucide-react";

export const metadata = { title: "Verificar constancia · Curso CENI" };

export default async function VerificarFolioPage({
  params,
}: {
  params: Promise<{ folio: string }>;
}) {
  const { folio } = await params;
  const constancia = await buscarConstanciaPorFolio(folio);

  const fecha = constancia
    ? new Date(constancia.fecha).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })
    : null;
  const vigenciaTexto = constancia?.vigenciaHasta
    ? new Date(constancia.vigenciaHasta).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })
    : null;

  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <div className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#4b18a8] text-white">
          <GraduationCap className="h-5 w-5" />
        </span>
        <span className="font-serif text-xl font-black text-[#070b2f]">Curso CENI</span>
      </div>

      <p className="mt-8 text-xs font-black uppercase tracking-wide text-[#dda632]">
        Verificación pública de constancia
      </p>

      {constancia ? (
        <div className="mt-4 rounded-2xl border border-[#e5def4] bg-white p-6">
          <div
            className={`flex items-center gap-2 rounded-xl border p-3 text-sm font-bold ${
              constancia.vigente
                ? "border-green-500 bg-green-50 text-green-800"
                : "border-[#dda632] bg-[#fff8e8] text-[#5a4300]"
            }`}
          >
            {constancia.vigente ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}
            {constancia.vigente ? "Constancia vigente" : "Constancia vencida"}
          </div>

          <dl className="mt-5 space-y-3 text-sm">
            <div>
              <dt className="text-xs font-black uppercase tracking-wide text-[#6c6690]">Nombre</dt>
              <dd className="text-[#070b2f]">{constancia.nombre}</dd>
            </div>
            <div>
              <dt className="text-xs font-black uppercase tracking-wide text-[#6c6690]">Folio</dt>
              <dd className="font-mono font-bold text-[#4b18a8]">{constancia.folio}</dd>
            </div>
            <div>
              <dt className="text-xs font-black uppercase tracking-wide text-[#6c6690]">Curso</dt>
              <dd className="text-[#070b2f]">
                Programa CENI — Certificación de Entornos Neuroinclusivos, Alianza Índigo Neurodivergente A.C.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-black uppercase tracking-wide text-[#6c6690]">Examen integrador</dt>
              <dd className="text-[#070b2f]">{constancia.porcentaje}% de aciertos</dd>
            </div>
            <div>
              <dt className="text-xs font-black uppercase tracking-wide text-[#6c6690]">Emitida el</dt>
              <dd className="text-[#070b2f]">{fecha}</dd>
            </div>
            {vigenciaTexto && (
              <div>
                <dt className="text-xs font-black uppercase tracking-wide text-[#6c6690]">Vigente hasta</dt>
                <dd className="text-[#070b2f]">{vigenciaTexto}</dd>
              </div>
            )}
          </dl>
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-6">
          <div className="flex items-center gap-2 text-sm font-bold text-red-800">
            <XCircle className="h-5 w-5 shrink-0" /> Folio no encontrado
          </div>
          <p className="mt-2 text-sm text-red-900">
            No existe una constancia válida con el folio <span className="font-mono">{folio}</span>. Verifica que
            lo hayas copiado correctamente.
          </p>
        </div>
      )}

      <Link href="/" className="mt-8 inline-block text-xs font-black uppercase tracking-wide text-[#4b18a8] hover:underline">
        Ir al Curso CENI
      </Link>
    </div>
  );
}
