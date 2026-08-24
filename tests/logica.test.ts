import { describe, it, expect } from "vitest";
import {
  modulos,
  getModuloById,
  getModuloAdyacente,
  moduloDesbloqueado,
  actividadesCompletas,
} from "@/lib/data/modulos";
import { barajar, barajarOpciones, armarIntento } from "@/lib/quiz-shuffle";
import { puntuarModulo, puntuarExamen } from "@/lib/quiz-scoring";

describe("navegación de módulos", () => {
  it("getModuloById devuelve el módulo correcto o undefined", () => {
    expect(getModuloById("m1")?.numero).toBe(1);
    expect(getModuloById("m10")?.numero).toBe(10);
    expect(getModuloById("noexiste")).toBeUndefined();
  });

  it("getModuloAdyacente respeta los bordes", () => {
    expect(getModuloAdyacente("m1", -1)).toBeUndefined();
    expect(getModuloAdyacente("m1", 1)?.id).toBe("m2");
    expect(getModuloAdyacente("m10", 1)).toBeUndefined();
    expect(getModuloAdyacente("m2", -1)?.id).toBe("m1");
  });
});

describe("moduloDesbloqueado", () => {
  it("el primer módulo siempre está desbloqueado", () => {
    expect(moduloDesbloqueado(getModuloById("m1")!, [])).toBe(true);
  });

  it("un módulo se bloquea hasta aprobar el anterior", () => {
    const m2 = getModuloById("m2")!;
    expect(moduloDesbloqueado(m2, [])).toBe(false);
    expect(moduloDesbloqueado(m2, ["m1"])).toBe(true);
  });
});

describe("actividadesCompletas", () => {
  it("solo es true cuando se entregó cada actividad", () => {
    const m = modulos.find((x) => x.actividades.length > 0)!;
    const codigos = m.actividades.map((a) => a.codigo);
    expect(actividadesCompletas(m, [])).toBe(false);
    expect(actividadesCompletas(m, codigos.slice(0, -1))).toBe(false);
    expect(actividadesCompletas(m, codigos)).toBe(true);
  });
});

describe("barajar (Fisher-Yates)", () => {
  it("no muta el original y conserva los mismos elementos", () => {
    const orig = [1, 2, 3, 4, 5];
    const copia = [...orig];
    const res = barajar(orig);
    expect(orig).toEqual(copia); // no mutó
    expect(res).toHaveLength(orig.length);
    expect([...res].sort()).toEqual([...orig].sort());
  });
});

describe("barajarOpciones", () => {
  it("remapea el índice correcto a la nueva posición", () => {
    const q = {
      id: "t1",
      pregunta: "¿?",
      opciones: ["A", "B", "C", "D"],
      correcta: 2, // "C"
      explicacion: "",
    };
    for (let i = 0; i < 50; i++) {
      const b = barajarOpciones(q);
      expect(b.opciones).toHaveLength(4);
      expect([...b.opciones].sort()).toEqual(["A", "B", "C", "D"]);
      expect(b.opciones[b.correcta]).toBe("C"); // la respuesta correcta sigue siendo "C"
    }
  });
});

describe("armarIntento", () => {
  const banco = Array.from({ length: 20 }, (_, i) => ({
    id: `q${i}`,
    pregunta: `p${i}`,
    opciones: ["a", "b", "c", "d"],
    correcta: 0,
    explicacion: "",
  }));

  it("toma n preguntas sin duplicados", () => {
    const intento = armarIntento(banco, 8);
    expect(intento).toHaveLength(8);
    const ids = intento.map((q) => q.id);
    expect(new Set(ids).size).toBe(8);
    ids.forEach((id) => expect(banco.some((q) => q.id === id)).toBe(true));
  });

  it("no excede el tamaño del banco", () => {
    expect(armarIntento(banco, 999)).toHaveLength(banco.length);
  });
});

describe("puntuación en servidor (autoritativa)", () => {
  const m = modulos[0];
  const textoCorrecto = (q: (typeof m.quiz)[number]) => q.opciones[q.correcta];

  it("puntuarModulo cuenta aciertos por texto de la opción, no por índice", () => {
    const todasCorrectas = Object.fromEntries(m.quiz.map((q) => [q.id, textoCorrecto(q)]));
    expect(puntuarModulo(m.id, todasCorrectas)).toEqual({ aciertos: m.quiz.length, total: m.quiz.length });

    // Una mal contestada baja el puntaje en 1.
    const unaMal = { ...todasCorrectas, [m.quiz[0].id]: "respuesta inventada" };
    expect(puntuarModulo(m.id, unaMal)).toEqual({ aciertos: m.quiz.length - 1, total: m.quiz.length });
  });

  it("puntuarModulo ignora ids que no existen en el banco", () => {
    const res = puntuarModulo(m.id, { noexiste: "x", [m.quiz[0].id]: textoCorrecto(m.quiz[0]) });
    expect(res).toEqual({ aciertos: 1, total: 1 });
  });

  it("puntuarModulo devuelve 0/0 para un módulo desconocido", () => {
    expect(puntuarModulo("noexiste", { a: "b" })).toEqual({ aciertos: 0, total: 0 });
  });

  it("puntuarExamen resuelve los ids con prefijo y puntúa contra el banco", () => {
    const q = m.quiz[0];
    const id = `final-${m.id}-${q.id}`;
    expect(puntuarExamen("ceni", { [id]: textoCorrecto(q) })).toEqual({ aciertos: 1, total: 1 });
    expect(puntuarExamen("ceni", { [id]: "otra cosa" })).toEqual({ aciertos: 0, total: 1 });
  });
});
