# Diplomado NOM-035 ND — estado de construcción (WIP)

## Hecho
- `contenido/d01.ts`..`d23.ts`: contenido ÍNTEGRO (100%) de los 23 módulos, sin cortes.
- `quizzes/d01.json`..`d15.json`: bancos de examen validados (14–15 preguntas,
  3 actividades, evaluación suma 100%), redactados desde el contenido real.

## Pendiente (bloqueado por límite semanal de uso; reinicia 5am UTC)
- `quizzes/d16.json`..`d23.json` (8 módulos): D16 Liderazgo, D17 Documentación,
  D18 Simulación Inspección, D19 Ética/Datos, D20 Práctica Consultiva,
  D21 Casos Sectoriales, D22 Certificación CENI, D23 Proyecto Final.
- Fase 1 arquitectura: tipo Curso, contenidoMarkdown en Modulo, registro de
  cursos, render markdown, ruteo (/ selector, /ceni, /diplomado, /diplomado/[id]),
  progreso por curso.
- Fase 3: examen/proyecto final del diplomado + constancia (migración cursoId).
- Fase 4: materiales/plantillas, tests y CI del diplomado.
