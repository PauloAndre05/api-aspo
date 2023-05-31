/*
  Warnings:

  - You are about to drop the column `bi` on the `agendamentos` table. All the data in the column will be lost.
  - You are about to drop the `identificacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "agendamentos" DROP CONSTRAINT "agendamentos_bi_fkey";

-- AlterTable
ALTER TABLE "agendamentos" DROP COLUMN "bi";

-- DropTable
DROP TABLE "identificacao";
