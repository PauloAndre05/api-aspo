/*
  Warnings:

  - The primary key for the `Cancelado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idCancelado` on the `Cancelado` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cancelado" DROP CONSTRAINT "Cancelado_pkey",
DROP COLUMN "idCancelado",
ADD CONSTRAINT "Cancelado_pkey" PRIMARY KEY ("id");
