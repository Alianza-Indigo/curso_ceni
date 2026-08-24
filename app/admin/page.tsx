import { redirect } from "next/navigation";
import { verificarSesionAdmin } from "@/lib/admin-auth";
import { logoutAdminAction } from "@/app/actions/admin-auth";
import { prisma } from "@/lib/db";
import { actividadesCompletas } from "@/lib/data/modulos";
import { cursos } from "@/lib/data/cursos";
import { Curso } from "@/lib/types";
import AdminTablaUsuarios, { FilaUsuario } from "@/components/AdminTablaUsuarios";
import AdminCambiarPassword from "@/components/AdminCambiarPassword";
import { Users, Award, GraduationCap, LogOut } from "lucide-react";

export const metadata = { title: "Panel de administración · Cursos" };

type UsuarioBase = {
  id: string;
  name: string | null;
  email: string | null;
  aprobadosQuiz: Set<string>;
  codigosPorModulo: Map<string, string[]>;
  resultadosExamen: { cursoId: string; aprobado: boolean; porcentaje: number; folio: string | null; fecha: Date }[];
};

type DatosCurso = {
  curso: Curso;
  usuarios: FilaUsuario[];
  porModulo: { numero: number; titulo: string; aprobados: number }[];
  totalCertificados: number;
};

function datosCurso(curso: Curso, base: UsuarioBase[]): DatosCurso {
  const completadosPorUsuario = new Map<string, string[]>();
  for (const u of base) {
    const completados = curso.modulos
      .filter(
        (m) => u.aprobadosQuiz.has(m.id) && actividadesCompletas(m, u.codigosPorModulo.get(m.id) ?? [])
      )
      .map((m) => m.id);
    completadosPorUsuario.set(u.id, completados);
  }

  const usuarios: FilaUsuario[] = base.map((u) => {
    const examen = u.resultadosExamen.find((r) => r.cursoId === curso.id);
    return {
      id: u.id,
      nombre: u.name ?? "(sin nombre)",
      email: u.email ?? "(sin correo)",
      modulosAprobados: completadosPorUsuario.get(u.id)?.length ?? 0,
      totalModulos: curso.modulos.length,
      examenAprobado: examen?.aprobado ?? false,
      examenPorcentaje: examen?.porcentaje ?? null,
      folio: examen?.folio ?? null,
      fechaExamen: examen?.fecha.toISOString() ?? null,
    };
  });

  const porModulo = curso.modulos.map((m) => ({
    numero: m.numero,
    titulo: m.titulo,
    aprobados: base.filter((u) => completadosPorUsuario.get(u.id)?.includes(m.id)).length,
  }));

  return {
    curso,
    usuarios,
    porModulo,
    totalCertificados: usuarios.filter((u) => u.examenAprobado).length,
  };
}

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
      resultadosExamen: {
        select: { cursoId: true, aprobado: true, porcentaje: true, folio: true, fecha: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const base: UsuarioBase[] = usuariosDb.map((u) => {
    const codigosPorModulo = new Map<string, string[]>();
    for (const e of u.entregasActividad) {
      const arr = codigosPorModulo.get(e.moduloId) ?? [];
      arr.push(e.actividadCodigo);
      codigosPorModulo.set(e.moduloId, arr);
    }
    return {
      id: u.id,
      name: u.name,
      email: u.email,
      aprobadosQuiz: new Set(u.progresoModulos.map((p) => p.moduloId)),
      codigosPorModulo,
      resultadosExamen: u.resultadosExamen,
    };
  });

  const totalUsuarios = base.length;
  const porCurso = cursos.map((c) => datosCurso(c, base));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">
            Panel de administración
          </p>
          <h1 className="mt-1 font-serif text-3xl font-black text-[#070b2f]">Cursos · Alianza Índigo</h1>
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
        {porCurso.map(({ curso, totalCertificados }) => (
          <div key={curso.id} className="rounded-2xl border border-[#e5def4] bg-white p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dda632]/20 text-[#dda632]">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="text-2xl font-black text-[#070b2f]">{totalCertificados}</p>
                <p className="text-xs font-bold text-[#6c6690]">Constancias · {curso.titulo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {porCurso.map(({ curso, usuarios, porModulo, totalCertificados }) => {
        const tasa = totalUsuarios === 0 ? 0 : Math.round((totalCertificados / totalUsuarios) * 100);
        return (
          <div key={curso.id} className="mt-12">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-[#4b18a8]" />
              <h2 className="font-serif text-2xl font-black text-[#070b2f]">{curso.titulo}</h2>
              <span className="ms-2 rounded-full bg-[#f3eefc] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#4b18a8]">
                {curso.modulos.length} módulos · tasa {tasa}%
              </span>
            </div>

            <section className="mt-4">
              <h3 className="font-serif text-lg font-bold text-[#070b2f]">Aprobación por módulo</h3>
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

            <section className="mt-6">
              <h3 className="font-serif text-lg font-bold text-[#070b2f]">Usuarios</h3>
              <div className="mt-3">
                <AdminTablaUsuarios usuarios={usuarios} />
              </div>
            </section>
          </div>
        );
      })}

      <section className="mt-12 mb-10">
        <AdminCambiarPassword />
      </section>
    </div>
  );
}
