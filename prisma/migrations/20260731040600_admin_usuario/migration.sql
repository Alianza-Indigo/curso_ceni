-- CreateTable
CREATE TABLE "AdminUsuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUsuario_email_key" ON "AdminUsuario"("email");

-- Administrators must be provisioned securely after deployment; no default credentials.\n