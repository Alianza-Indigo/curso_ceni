-- AlterTable
ALTER TABLE "ResultadoExamen" ADD COLUMN     "vigenciaHasta" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "EntregaActividad" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "moduloId" TEXT NOT NULL,
    "actividadCodigo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EntregaActividad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EntregaActividad_userId_moduloId_actividadCodigo_key" ON "EntregaActividad"("userId", "moduloId", "actividadCodigo");

-- AddForeignKey
ALTER TABLE "EntregaActividad" ADD CONSTRAINT "EntregaActividad_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
