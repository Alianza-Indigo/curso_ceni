import { Seccion, Actividad, EvaluacionComponente } from "@/lib/types";
import { ClipboardList, Sparkles } from "lucide-react";

export function SeccionBloque({ seccion }: { seccion: Seccion }) {
  return (
    <section className="mb-8">
      <h3 className="font-serif text-xl font-bold text-[#070b2f]">{seccion.titulo}</h3>
      <div className="prose-ceni">
        {seccion.parrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {seccion.lista && (
        <div className="mt-4 rounded-xl border border-[#e5def4] bg-[#fbfaff] p-4">
          {seccion.lista.titulo && (
            <p className="mb-2 text-xs font-black uppercase tracking-wide text-[#4b18a8]">
              {seccion.lista.titulo}
            </p>
          )}
          <ul className="space-y-2">
            {seccion.lista.items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-[#20234a]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#dda632]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {seccion.tabla && (
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#e5def4]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f5f1ff] text-xs font-black uppercase text-[#4b18a8]">
              <tr>
                {seccion.tabla.encabezados.map((h, i) => (
                  <th key={i} className="px-4 py-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {seccion.tabla.filas.map((fila, i) => (
                <tr key={i} className="border-t border-[#e5def4] align-top">
                  {fila.map((celda, j) => (
                    <td key={j} className="px-4 py-3 text-[#20234a]">
                      {celda}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {seccion.destacado && (
        <div className="mt-4 rounded-xl border-l-4 border-[#dda632] bg-[#070b2f] p-4 text-white">
          <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">
            {seccion.destacado.titulo}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/90">{seccion.destacado.texto}</p>
        </div>
      )}
    </section>
  );
}

export function ActividadesBloque({ actividades }: { actividades: Actividad[] }) {
  if (!actividades.length) return null;
  return (
    <section className="mb-8">
      <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-[#070b2f]">
        <Sparkles className="h-5 w-5 text-[#dda632]" /> Actividades del módulo
      </h3>
      <div className="mt-3 grid gap-3">
        {actividades.map((a) => (
          <div key={a.codigo} className="rounded-xl border border-[#e5def4] bg-white p-4">
            <p className="text-xs font-black uppercase tracking-wide text-[#4b18a8]">
              Actividad {a.codigo} · {a.duracion}
            </p>
            <p className="mt-1 font-bold text-[#070b2f]">{a.titulo}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#3a3d63]">{a.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EvaluacionBloque({ evaluacion }: { evaluacion: EvaluacionComponente[] }) {
  if (!evaluacion.length) return null;
  return (
    <section className="mb-8">
      <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-[#070b2f]">
        <ClipboardList className="h-5 w-5 text-[#4b18a8]" /> Cómo se evalúa este módulo
      </h3>
      <div className="mt-3 overflow-x-auto rounded-xl border border-[#e5def4]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f5f1ff] text-xs font-black uppercase text-[#4b18a8]">
            <tr>
              <th className="px-4 py-3">Componente</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Valor</th>
            </tr>
          </thead>
          <tbody>
            {evaluacion.map((e, i) => (
              <tr key={i} className="border-t border-[#e5def4]">
                <td className="px-4 py-3 text-[#20234a]">{e.componente}</td>
                <td className="px-4 py-3 text-[#6c6690]">{e.tipo}</td>
                <td className="px-4 py-3 font-bold text-[#4b18a8]">{e.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
