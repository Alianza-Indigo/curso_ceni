@AGENTS.md

## Preferencias del usuario

- Siempre hacer las cosas bien desde el principio: ante una tarea, preferir la solución
  completa y correcta por encima de un parche rápido o parcial, salvo que se pida
  explícitamente algo mínimo o rápido.

## Análisis pendiente: generalizar la plataforma para "cualquier PDF"

Idea en evaluación (aún no autorizada para implementar): convertir Curso CENI en una
plataforma que genere un curso interactivo equivalente a partir de cualquier PDF que se
le entregue, no solo del contenido CENI. Se hizo un análisis (sin tocar código) con estas
conclusiones, para retomarlo en una conversación aparte:

- **Ya es reutilizable tal cual** (no depende de contenido CENI): Auth.js/Google OAuth,
  progreso por usuario, bloqueo secuencial de módulos (`lib/data/modulos.ts#moduloDesbloqueado`),
  banco de quiz + barajado anti-copia (`lib/quiz-shuffle.ts`), panel admin con login propio
  (`lib/admin-auth.ts`), límite de costo/abuso del asistente, migraciones versionadas.
- **Es 100% específico de CENI hoy** (contenido como código, no como datos): los 10
  módulos en `lib/data/modulo1.ts`…`modulo10.ts` (~3,100 líneas de TypeScript importado
  estáticamente, sin tabla `Modulo` en Prisma), `lib/data/examenFinal.ts` (ponderación y
  caso práctico fijos), `lib/data/materiales.ts` (glosario/historias), y el branding
  (colores en clases Tailwind arbitrarias repetidas, nombre "Alianza Índigo"/"CENI" fijo
  en `app/api/constancia/route.ts`). `lib/asistente-contexto.ts` ya es estructuralmente
  genérico (solo concatena texto), pero asume ese árbol de imports.
- **Qué haría falta**:
  1. Mover el contenido de código a base de datos (tablas `Curso`, `Modulo`,
     `PreguntaQuiz`, etc.) — el cambio estructural más grande, condición para todo lo demás.
  2. Pipeline PDF → curso estructurado: extraer texto (falta librería, `pdf-lib` solo
     genera PDFs, no los lee), segmentar en módulos con Gemini, generar bancos de quiz por
     módulo (para CENI se hizo con 10 agentes en paralelo + verificación humana — sin
     supervisión el riesgo de alucinación en una certificación es serio), generalizar o
     hacer opcional el caso práctico final, y construir un panel de edición/revisión de
     contenido antes de publicar (hoy el admin solo ve usuarios, no puede editar contenido).
  3. Generalizar el prompt del asistente y la constancia PDF para leer nombre de
     organización/curso/contacto desde base de datos (esfuerzo bajo, templating).
  4. Theming por curso: reemplazar hex fijos por variables de tema (esfuerzo medio,
     mecánico pero toca casi todos los componentes).
  5. Decisión pendiente de alcance: ¿un curso a la vez, o multi-tenant (varios
     cursos/organizaciones simultáneos, cada uno con su propio admin)? Lo segundo suma
     enrollment y aislamiento de datos entre cursos.
- **Conclusión**: no es un ajuste, es un producto nuevo sobre la infraestructura ya
  probada en producción. El cuello de botella no es la ingeniería del pipeline (ya usan
  Gemini) sino la calidad/verificación del contenido generado por IA para algo tan
  sensible como una certificación — ahí debe ir el diseño de un paso de revisión humana
  obligatorio antes de publicar cualquier módulo o quiz generado.
