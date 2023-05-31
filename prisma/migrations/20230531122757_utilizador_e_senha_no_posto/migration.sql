/*
  Warnings:

  - Added the required column `utilizador` to the `postos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "postos" ADD COLUMN     "senha" TEXT NOT NULL DEFAULT '0000',
ADD COLUMN     "utilizador" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "utilizador" TEXT NOT NULL,
    "senha" TEXT NOT NULL DEFAULT '1111',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
