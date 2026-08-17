import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { modulos } from "@/lib/data/modulos";
import { construirExamenFinal, componentesEvaluacionFinal, casoPracticoFinal } from "@/lib/data/examenFinal";
import { formatosDescargables, glosario } from "@/lib/data/materiales";

function sumaPorcentajes(valores: string[]): number {
  return valores.reduce((acc, v) => acc + (parseInt(v.replace(/[^0-9]/g, ""), 10) || 0), 0);
}

function archivoExiste(archivo: string): boolean {
  return existsSync(join(process.cwd(), "public", archivo));
}

describe("integridad de cada módulo", () => {
  for (const m of modulos) {
    describe(`Módulo ${m.numero} (${m.id})`, () => {
      it("preguntasPorIntento es válido y no excede el banco", () => {
        expect(m.preguntasPorIntento).toBeGreaterThanOrEqual(1);
        expect(m.preguntasPorIntento).toBeLessThanOrEqual(m.quiz.length);
      });

      it("los ids de quiz son únicos", () => {
        const ids = m.quiz.map((q) => q.id);
        expect(new Set(ids).size).toBe(ids.length);
      });

      it("cada pregunta tiene opciones válidas y respuesta en rango", () => {
        for (const q of m.quiz) {
          expect(q.opciones.length).toBeGreaterThanOrEqual(2);
          expect(q.correcta).toBeGreaterThanOrEqual(0);
          expect(q.correcta).toBeLessThan(q.opciones.length);
        }
      });

      it("los códigos de actividad son únicos", () => {
        const cods = m.actividades.map((a) => a.codigo);
        expect(new Set(cods).size).toBe(cods.length);
      });

      it("la evaluación suma 100%", () => {
        expect(sumaPorcentajes(m.evaluacion.map((e) => e.valor))).toBe(100);
      });

      it("cada recurso descargable existe en public/ y tiene formato", () => {
        for (const r of m.recursos ?? []) {
          expect(r.formato, `${r.codigo} sin formato`).toBeTruthy();
          expect(archivoExiste(r.archivo), `no existe ${r.archivo}`).toBe(true);
        }
      });
    });
  }
});

describe("examen final", () => {
  it("arma la muestra esperada por módulo, sin ids duplicados", () => {
    const esperado = modulos.reduce((acc, m) => {
      const n = m.numero === 6 || m.numero === 7 ? 8 : m.numero === 9 ? 6 : 4;
      return acc + Math.min(n, m.quiz.length);
    }, 0);
    const examen = construirExamenFinal();
    expect(examen).toHaveLength(esperado);
    const ids = examen.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("los componentes de la evaluación final suman 100%", () => {
    expect(sumaPorcentajes(componentesEvaluacionFinal.map((c) => c.valor))).toBe(100);
  });

  it("el caso práctico tiene tareas", () => {
    expect(casoPracticoFinal.tareas.length).toBeGreaterThan(0);
  });
});

describe("materiales", () => {
  it("cada formato con archivo existe en public/", () => {
    for (const f of formatosDescargables) {
      if (f.archivo) {
        expect(archivoExiste(f.archivo), `no existe ${f.archivo}`).toBe(true);
      }
    }
  });

  it("los términos del glosario son únicos", () => {
    const terms = glosario.map((g) => g.termino.toLowerCase());
    expect(new Set(terms).size).toBe(terms.length);
  });
});
