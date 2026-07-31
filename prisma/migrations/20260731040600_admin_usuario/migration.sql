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

-- SeedAdmin: siembra el único administrador inicial. Idempotente (ON CONFLICT)
-- para que no truene si esta migración se re-ejecuta. La contraseña se puede
-- cambiar después desde el propio panel /admin — esto es solo el arranque.
INSERT INTO "AdminUsuario" ("id", "email", "passwordHash", "actualizadoEn")
VALUES (
  'admin-seed-001',
  'mossomex@gmail.com',
  '$2b$12$bicuHHnkFFpuN7iOsLo8IuZKZSVgzXgFCQ11QdD/0zbTTEF2n6tDC',
  CURRENT_TIMESTAMP
)
ON CONFLICT ("email") DO NOTHING;
