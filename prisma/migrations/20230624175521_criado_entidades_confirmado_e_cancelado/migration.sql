/*
  Warnings:

  - You are about to drop the column `estado` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "estado",
DROP COLUMN "tipo";

-- DropEnum
DROP TYPE "TipoUsuario";

-- DropEnum
DROP TYPE "UserState";

-- CreateTable
CREATE TABLE "Cancelado" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataAgenda" TEXT NOT NULL,
    "servicoId" TEXT NOT NULL,
    "postoId" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bi" TEXT,
    "comprovativo" TEXT NOT NULL,
    "horaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cancelado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Confirmado" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataAgenda" TEXT NOT NULL,
    "servicoId" TEXT NOT NULL,
    "postoId" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bi" TEXT,
    "comprovativo" TEXT NOT NULL,
    "horaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Confirmado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cancelado_comprovativo_key" ON "Cancelado"("comprovativo");

-- CreateIndex
CREATE UNIQUE INDEX "Confirmado_comprovativo_key" ON "Confirmado"("comprovativo");

-- AddForeignKey
ALTER TABLE "Cancelado" ADD CONSTRAINT "Cancelado_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "servicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancelado" ADD CONSTRAINT "Cancelado_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "postos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancelado" ADD CONSTRAINT "Cancelado_horaId_fkey" FOREIGN KEY ("horaId") REFERENCES "Horario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Confirmado" ADD CONSTRAINT "Confirmado_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "servicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Confirmado" ADD CONSTRAINT "Confirmado_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "postos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Confirmado" ADD CONSTRAINT "Confirmado_horaId_fkey" FOREIGN KEY ("horaId") REFERENCES "Horario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
