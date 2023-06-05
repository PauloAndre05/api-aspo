/*
  Warnings:

  - You are about to drop the column `utilizador` on the `Users` table. All the data in the column will be lost.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMINISTRADOR', 'FUNCIONARIO');

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "utilizador",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "tipo" "TipoUsuario" NOT NULL;
