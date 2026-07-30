import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { reiniciarProgreso } from "@/lib/progreso-server";

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  await reiniciarProgreso(session.user.id);
  return NextResponse.json({ ok: true });
}
