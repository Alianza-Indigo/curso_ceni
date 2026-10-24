import type { PreguntaQuiz } from "@/lib/types";
export type PreguntaPublica = Pick<PreguntaQuiz, "id" | "pregunta" | "opciones">;
