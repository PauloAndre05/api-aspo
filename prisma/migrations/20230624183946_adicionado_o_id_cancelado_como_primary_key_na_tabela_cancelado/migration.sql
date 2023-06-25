/*
  Warnings:

  - The primary key for the `Cancelado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `idCancelado` was added to the `Cancelado` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Cancelado" DROP CONSTRAINT "Cancelado_pkey",
ADD COLUMN     "idCancelado" TEXT NOT NULL,
ADD CONSTRAINT "Cancelado_pkey" PRIMARY KEY ("idCancelado");
