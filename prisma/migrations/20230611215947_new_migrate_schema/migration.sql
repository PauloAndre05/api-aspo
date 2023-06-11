/*
  Warnings:

  - Added the required column `limite` to the `postos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Horario" ADD COLUMN     "disponivel" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "postos" ADD COLUMN     "limite" INTEGER NOT NULL;
