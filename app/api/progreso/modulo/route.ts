import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { registrarResultadoModulo } from "@/lib/progreso-server";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const body = await request.json();
  const { moduloId, respuestas, aciertos, total } = body ?? {};

  if (
    typeof moduloId !== "string" ||
    typeof aciertos !== "number" ||
    typeof total !== "number" ||
    typeof respuestas !== "object" ||
    respuestas === null
  ) {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  try {
    const resultado = await registrarResultadoModulo(
      session.user.id,
      moduloId,
      respuestas,
      aciertos,
      total
    );
    return NextResponse.json(resultado);
  } catch {
    return NextResponse.json({ error: "Módulo desconocido" }, { status: 400 });
  }
}
