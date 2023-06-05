/*
  Warnings:

  - Added the required column `descricao` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "servicos" ADD COLUMN     "descricao" TEXT NOT NULL;
