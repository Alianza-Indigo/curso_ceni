import { auth } from "@/auth";
import Landing from "@/components/Landing";
import SelectorCursos from "@/components/SelectorCursos";
import { cursos } from "@/lib/data/cursos";
import { obtenerProgreso } from "@/lib/progreso-server";

export default async function Home() {
  const session = await auth();
  if (!session?.user?.id) return <Landing />;

  const userId = session.user.id;
  const cursosConProgreso = await Promise.all(
    cursos.map(async (curso) => {
      const progreso = await obtenerProgreso(userId, curso.modulos);
      const completados = curso.modulos.filter((m) =>
        progreso.modulosCompletados.includes(m.id)
      ).length;
      return { curso, completados, total: curso.modulos.length };
    })
  );

  return <SelectorCursos cursos={cursosConProgreso} />;
}
