import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { guardarEntregaActividad, obtenerProgreso } from "@/lib/progreso-server";
import { getModuloGlobal, getCursoDeModulo, moduloDesbloqueadoCurso } from "@/lib/data/cursos";
import { accesoSinRestriccion } from "@/lib/curso-acceso";

const CONTENIDO_MIN = 20;
const CONTENIDO_MAX = 8000;

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const body = await request.json();
  const { moduloId, actividadCodigo, contenido } = body ?? {};

  if (typeof moduloId !== "string" || typeof actividadCodigo !== "string" || typeof contenido !== "string") {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const limpio = contenido.trim();
  if (limpio.length < CONTENIDO_MIN) {
    return NextResponse.json(
      { error: `Escribe al menos ${CONTENIDO_MIN} caracteres antes de guardar tu entrega.` },
      { status: 400 }
    );
  }
  if (limpio.length > CONTENIDO_MAX) {
    return NextResponse.json({ error: `La entrega no puede superar ${CONTENIDO_MAX} caracteres.` }, { status: 400 });
  }

  const modulo = getModuloGlobal(moduloId);
  const curso = getCursoDeModulo(moduloId);
  if (!modulo || !curso) return NextResponse.json({ error: "Módulo desconocido" }, { status: 404 });
  const libre = await accesoSinRestriccion(session.user.email);
  const progreso = await obtenerProgreso(session.user.id, curso.modulos, curso.id);
  if (!libre && !moduloDesbloqueadoCurso(curso, modulo, progreso.modulosCompletados)) {
    return NextResponse.json({ error: "Módulo bloqueado" }, { status: 403 });
  }
  try {
    await guardarEntregaActividad(session.user.id, moduloId, actividadCodigo, limpio);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Actividad desconocida" }, { status: 400 });
  }
}
