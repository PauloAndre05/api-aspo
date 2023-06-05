/*
  Warnings:

  - You are about to drop the column `credencialAdmin` on the `postos` table. All the data in the column will be lost.
  - You are about to drop the column `credencialUsuario` on the `postos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "postos" DROP COLUMN "credencialAdmin",
DROP COLUMN "credencialUsuario";
