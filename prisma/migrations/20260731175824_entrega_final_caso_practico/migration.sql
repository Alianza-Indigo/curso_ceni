-- AlterTable
ALTER TABLE "ResultadoExamen" ADD COLUMN     "fechaCertificacion" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "EntregaFinal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "casoPractico" TEXT,
    "retroalimentacion" TEXT,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EntregaFinal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EntregaFinal_userId_key" ON "EntregaFinal"("userId");

-- AddForeignKey
ALTER TABLE "EntregaFinal" ADD CONSTRAINT "EntregaFinal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
