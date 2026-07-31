"use client";

import { useState } from "react";
import { Search, CheckCircle2, Circle } from "lucide-react";

export type FilaUsuario = {
  id: string;
  nombre: string;
  email: string;
  modulosAprobados: number;
  totalModulos: number;
  examenAprobado: boolean;
  examenPorcentaje: number | null;
  folio: string | null;
  fechaExamen: string | null;
};

export default function AdminTablaUsuarios({ usuarios }: { usuarios: FilaUsuario[] }) {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = usuarios.filter((u) => {
    const q = busqueda.trim().toLowerCase();
    if (!q) return true;
    return (
      u.nombre.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      (u.folio ?? "").toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <div className="relative mb-3 max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a6a2b8]" />
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre, correo o folio…"
          className="min-h-11 w-full rounded-lg border border-[#e3dfef] py-2 pl-9 pr-3 text-sm outline-none focus-visible:border-[#4b18a8]"
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#e5def4]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f5f1ff] text-xs font-black uppercase text-[#4b18a8]">
            <tr>
              <th className="px-4 py-3">Usuario</th>
              <th className="px-4 py-3">Módulos</th>
              <th className="px-4 py-3">Examen</th>
              <th className="px-4 py-3">Folio</th>
              <th className="px-4 py-3">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((u) => (
              <tr key={u.id} className="border-t border-[#e5def4] align-top">
                <td className="px-4 py-3">
                  <p className="font-bold text-[#070b2f]">{u.nombre}</p>
                  <p className="text-xs text-[#6c6690]">{u.email}</p>
                </td>
                <td className="px-4 py-3 text-[#20234a]">
                  {u.modulosAprobados}/{u.totalModulos}
                </td>
                <td className="px-4 py-3">
                  {u.examenAprobado ? (
                    <span className="inline-flex items-center gap-1 font-bold text-green-700">
                      <CheckCircle2 className="h-4 w-4" /> {u.examenPorcentaje}%
                    </span>
                  ) : u.examenPorcentaje !== null ? (
                    <span className="inline-flex items-center gap-1 text-[#6c6690]">
                      <Circle className="h-4 w-4" /> {u.examenPorcentaje}%
                    </span>
                  ) : (
                    <span className="text-[#a6a2b8]">— sin intento</span>
                  )}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-[#4b18a8]">{u.folio ?? "—"}</td>
                <td className="px-4 py-3 text-xs text-[#6c6690]">
                  {u.fechaExamen ? new Date(u.fechaExamen).toLocaleDateString("es-MX") : "—"}
                </td>
              </tr>
            ))}
            {filtrados.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-sm text-[#6c6690]">
                  Sin resultados para &quot;{busqueda}&quot;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
