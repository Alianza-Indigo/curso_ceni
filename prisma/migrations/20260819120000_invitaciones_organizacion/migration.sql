-- CreateEnum
CREATE TYPE "EstadoInvitacion" AS ENUM ('PENDIENTE', 'ACEPTADA', 'EXPIRADA');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "organizacionId" TEXT,
ADD COLUMN     "passwordHash" TEXT,
ADD COLUMN     "passwordIntentosFallidos" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "passwordBloqueadoHasta" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "User_organizacionId_idx" ON "User"("organizacionId");

-- CreateTable
CREATE TABLE "Invitacion" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "organizacionId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "estado" "EstadoInvitacion" NOT NULL DEFAULT 'PENDIENTE',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "invitadoPor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Invitacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invitacion_token_key" ON "Invitacion"("token");

-- CreateIndex
CREATE INDEX "Invitacion_email_estado_idx" ON "Invitacion"("email", "estado");

-- CreateIndex
CREATE INDEX "Invitacion_organizacionId_estado_idx" ON "Invitacion"("organizacionId", "estado");

-- CreateIndex
CREATE INDEX "Invitacion_organizacionId_createdAt_idx" ON "Invitacion"("organizacionId", "createdAt");

-- AddForeignKey
ALTER TABLE "Invitacion" ADD CONSTRAINT "Invitacion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
