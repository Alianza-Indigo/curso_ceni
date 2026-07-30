-- AlterTable
ALTER TABLE "User" ADD COLUMN     "asistenteMensajesDia" TIMESTAMP(3),
ADD COLUMN     "asistenteMensajesHoy" INTEGER NOT NULL DEFAULT 0;
