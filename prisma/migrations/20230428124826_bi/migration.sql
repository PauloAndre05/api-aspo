/*
  Warnings:

  - You are about to drop the column `nomeCompleto` on the `agendamentos` table. All the data in the column will be lost.
  - You are about to drop the column `numeroID` on the `agendamentos` table. All the data in the column will be lost.
  - The primary key for the `identificacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `identificacao` table. All the data in the column will be lost.
  - You are about to drop the column `nBI` on the `identificacao` table. All the data in the column will be lost.
  - Added the required column `bi` to the `agendamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BI` to the `identificacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agendamentos" DROP COLUMN "nomeCompleto",
DROP COLUMN "numeroID",
ADD COLUMN     "bi" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "identificacao" DROP CONSTRAINT "identificacao_pkey",
DROP COLUMN "id",
DROP COLUMN "nBI",
ADD COLUMN     "BI" TEXT NOT NULL,
ADD CONSTRAINT "identificacao_pkey" PRIMARY KEY ("BI");

-- AddForeignKey
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_bi_fkey" FOREIGN KEY ("bi") REFERENCES "identificacao"("BI") ON DELETE RESTRICT ON UPDATE CASCADE;
