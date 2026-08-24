-- Soporte multi-curso para el examen final y la entrega final: cada usuario
-- puede tener un examen/constancia y una entrega final POR CURSO. Las filas
-- existentes pertenecen al curso "ceni" (valor por defecto).

-- ResultadoExamen: agrega cursoId y cambia la unicidad de userId a (userId, cursoId).
ALTER TABLE "ResultadoExamen" ADD COLUMN "cursoId" TEXT NOT NULL DEFAULT 'ceni';
DROP INDEX "ResultadoExamen_userId_key";
CREATE UNIQUE INDEX "ResultadoExamen_userId_cursoId_key" ON "ResultadoExamen"("userId", "cursoId");

-- EntregaFinal: agrega cursoId y cambia la unicidad de userId a (userId, cursoId).
ALTER TABLE "EntregaFinal" ADD COLUMN "cursoId" TEXT NOT NULL DEFAULT 'ceni';
DROP INDEX "EntregaFinal_userId_key";
CREATE UNIQUE INDEX "EntregaFinal_userId_cursoId_key" ON "EntregaFinal"("userId", "cursoId");
