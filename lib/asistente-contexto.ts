import "server-only";
import { modulos, getModuloById } from "@/lib/data/modulos";
import { glosario } from "@/lib/data/materiales";
import { Modulo, Seccion } from "@/lib/types";

function seccionATexto(s: Seccion): string {
  const partes = [`### ${s.titulo}`, ...s.parrafos];
  if (s.lista) {
    if (s.lista.titulo) partes.push(s.lista.titulo + ":");
    partes.push(...s.lista.items.map((it) => `- ${it}`));
  }
  if (s.tabla) {
    partes.push(s.tabla.encabezados.join(" | "));
    partes.push(...s.tabla.filas.map((f) => f.join(" | ")));
  }
  if (s.destacado) {
    partes.push(`[${s.destacado.titulo}] ${s.destacado.texto}`);
  }
  return partes.join("\n");
}

function moduloATexto(m: Modulo): string {
  return [
    `## Módulo ${m.numero}: ${m.titulo} (dirigido a: ${m.dirigidoA})`,
    `Objetivos: ${m.objetivos.join(" · ")}`,
    ...m.secciones.map(seccionATexto),
  ].join("\n\n");
}

function indiceCurso(): string {
  return modulos
    .map((m) => `Módulo ${m.numero}: ${m.titulo} — ${m.duracion} — dirigido a: ${m.dirigidoA}`)
    .join("\n");
}

function glosarioTexto(): string {
  return glosario.map((g) => `- ${g.termino}: ${g.definicion}`).join("\n");
}

const INSTRUCCIONES_BASE = `Eres el asistente virtual del Curso CENI (Certificación de Entornos Neuroinclusivos), de Alianza Índigo Neurodivergente A.C. Acompañas a estudiantes que están tomando el curso.

Reglas estrictas:
1. Responde ÚNICAMENTE con base en el contenido del curso que se te da a continuación. No inventes cifras, criterios, artículos legales ni datos que no estén en ese contenido.
2. Si la pregunta es sobre el curso pero el contenido dado no la cubre (por ejemplo, pertenece a otro módulo que no se te compartió), dilo explícitamente y sugiere en qué módulo probablemente se trate, usando el índice del curso. No la inventes.
3. Si la pregunta no tiene relación con el curso CENI o neuroinclusión, dilo con amabilidad y redirige la conversación al curso.
4. Practica tú mismo la comunicación neuroafirmativa que enseña el curso: lenguaje directo y literal, sin metáforas ambiguas, sin exigir "tono" o "actitud" particular, sin frases como "cálmate" o "cualquier duda no dudes en preguntar". Ve al punto.
5. Respuestas breves y concretas (máximo ~120 palabras) salvo que el estudiante pida explícitamente más detalle.
6. No dictamines juicios legales definitivos; para preguntas legales complejas, remite a que consulten a Alianza Índigo o a un profesional legal, citando lo que el módulo 5 ya dice al respecto si aplica.

Tono: cercano, paciente, sin infantilizar ni sobreexplicar.`;

export function construirSystemInstruction(moduloId?: string): string {
  const partes = [INSTRUCCIONES_BASE, "\n## Índice del curso\n" + indiceCurso()];

  if (moduloId) {
    const modulo = getModuloById(moduloId);
    if (modulo) {
      partes.push(
        `\nEl estudiante está viendo ahora mismo el Módulo ${modulo.numero}. Este es su contenido completo:\n\n` +
          moduloATexto(modulo)
      );
    }
  }

  partes.push("\n## Glosario oficial de términos CENI\n" + glosarioTexto());

  return partes.join("\n");
}
