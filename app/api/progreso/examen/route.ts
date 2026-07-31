import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { obtenerProgreso, registrarResultadoExamen } from "@/lib/progreso-server";
import { modulos } from "@/lib/data/modulos";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const progreso = await obtenerProgreso(session.user.id);
  if (progreso.modulosCompletados.length < modulos.length) {
    return NextResponse.json(
      { error: "Debes aprobar los 10 módulos antes de presentar el examen final" },
      { status: 403 }
    );
  }

  const body = await request.json();
  const { respuestas, aciertos, total } = body ?? {};

  if (
    typeof aciertos !== "number" ||
    typeof total !== "number" ||
    typeof respuestas !== "object" ||
    respuestas === null
  ) {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const resultado = await registrarResultadoExamen(session.user.id, respuestas, aciertos, total);
  return NextResponse.json(resultado);
}
