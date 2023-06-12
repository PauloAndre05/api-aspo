/*
  Warnings:

  - Added the required column `nome` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agendamentos" ADD COLUMN     "nome" TEXT NOT NULL;
