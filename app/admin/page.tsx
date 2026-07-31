import { redirect } from "next/navigation";
import { verificarSesionAdmin } from "@/lib/admin-auth";
import { logoutAdminAction } from "@/app/actions/admin-auth";
import { prisma } from "@/lib/db";
import { modulos, actividadesCompletas } from "@/lib/data/modulos";
import AdminTablaUsuarios, { FilaUsuario } from "@/components/AdminTablaUsuarios";
import AdminCambiarPassword from "@/components/AdminCambiarPassword";
import { Users, Award, GraduationCap, LogOut } from "lucide-react";

export const metadata = { title: "Panel de administración · Curso CENI" };

export default async function AdminPage() {
  const admin = await verificarSesionAdmin();
  if (!admin) redirect("/admin/login");

  const usuariosDb = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      progresoModulos: { where: { aprobado: true }, select: { moduloId: true } },
      entregasActividad: { select: { moduloId: true, actividadCodigo: true } },
      resultadoExamen: {
        select: { aprobado: true, porcentaje: true, folio: true, fecha: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  // Un módulo cuenta como completado solo si el quiz está aprobado Y todas sus
  // actividades prácticas tienen entrega (igual que el gate de progreso-server.ts).
  const modulosCompletadosPorUsuario = new Map(
    usuariosDb.map((u) => {
      const aprobadosQuiz = new Set(u.progresoModulos.map((p) => p.moduloId));
      const codigosPorModulo = new Map<string, string[]>();
      for (const e of u.entregasActividad) {
        const arr = codigosPorModulo.get(e.moduloId) ?? [];
        arr.push(e.actividadCodigo);
        codigosPorModulo.set(e.moduloId, arr);
      }
      const completados = modulos
        .filter((m) => aprobadosQuiz.has(m.id) && actividadesCompletas(m, codigosPorModulo.get(m.id) ?? []))
        .map((m) => m.id);
      return [u.id, completados];
    })
  );

  const usuarios: FilaUsuario[] = usuariosDb.map((u) => ({
    id: u.id,
    nombre: u.name ?? "(sin nombre)",
    email: u.email ?? "(sin correo)",
    modulosAprobados: modulosCompletadosPorUsuario.get(u.id)?.length ?? 0,
    totalModulos: modulos.length,
    examenAprobado: u.resultadoExamen?.aprobado ?? false,
    examenPorcentaje: u.resultadoExamen?.porcentaje ?? null,
    folio: u.resultadoExamen?.folio ?? null,
    fechaExamen: u.resultadoExamen?.fecha.toISOString() ?? null,
  }));

  const totalUsuarios = usuarios.length;
  const totalCertificados = usuarios.filter((u) => u.examenAprobado).length;
  const tasaAprobacion =
    totalUsuarios === 0 ? 0 : Math.round((totalCertificados / totalUsuarios) * 100);

  const porModulo = modulos.map((m) => ({
    numero: m.numero,
    titulo: m.titulo,
    aprobados: usuariosDb.filter((u) => modulosCompletadosPorUsuario.get(u.id)?.includes(m.id)).length,
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">
            Panel de administración
          </p>
          <h1 className="mt-1 font-serif text-3xl font-black text-[#070b2f]">Curso CENI</h1>
          <p className="mt-1 text-sm text-[#6c6690]">Sesión: {admin.email}</p>
        </div>
        <form action={logoutAdminAction}>
          <button
            type="submit"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#e3dfef] px-4 text-sm font-bold text-[#6c6690] hover:bg-[#f5f1ff]"
          >
            <LogOut className="h-4 w-4" /> Salir
          </button>
        </form>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#e5def4] bg-white p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5f1ff] text-[#4b18a8]">
              <Users className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-black text-[#070b2f]">{totalUsuarios}</p>
              <p className="text-xs font-bold text-[#6c6690]">Usuarios registrados</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-[#e5def4] bg-white p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dda632]/20 text-[#dda632]">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-black text-[#070b2f]">{totalCertificados}</p>
              <p className="text-xs font-bold text-[#6c6690]">Constancias emitidas</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-[#e5def4] bg-white p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-green-100 text-green-700">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-black text-[#070b2f]">{tasaAprobacion}%</p>
              <p className="text-xs font-bold text-[#6c6690]">Tasa de aprobación del examen</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="font-serif text-xl font-bold text-[#070b2f]">Aprobación por módulo</h2>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {porModulo.map((m) => {
            const pct = totalUsuarios === 0 ? 0 : Math.round((m.aprobados / totalUsuarios) * 100);
            return (
              <div key={m.numero} className="rounded-xl border border-[#e5def4] bg-white p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#070b2f]">
                    Módulo {m.numero} · {m.titulo}
                  </span>
                  <span className="font-black text-[#4b18a8]">{m.aprobados}</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#f1f0f4]">
                  <div className="h-full rounded-full bg-[#4b18a8]" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl font-bold text-[#070b2f]">Usuarios</h2>
        <div className="mt-3">
          <AdminTablaUsuarios usuarios={usuarios} />
        </div>
      </section>

      <section className="mt-8 mb-10">
        <AdminCambiarPassword />
      </section>
    </div>
  );
}
