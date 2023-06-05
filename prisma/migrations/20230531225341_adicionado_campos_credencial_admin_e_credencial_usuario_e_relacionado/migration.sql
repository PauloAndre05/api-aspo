/*
  Warnings:

  - You are about to drop the column `senha` on the `postos` table. All the data in the column will be lost.
  - You are about to drop the column `utilizador` on the `postos` table. All the data in the column will be lost.
  - Added the required column `postoId` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credencialAdmin` to the `postos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credencialUsuario` to the `postos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "postoId" INTEGER NOT NULL,
ALTER COLUMN "senha" DROP DEFAULT;

-- AlterTable
ALTER TABLE "postos" DROP COLUMN "senha",
DROP COLUMN "utilizador",
ADD COLUMN     "credencialAdmin" TEXT NOT NULL,
ADD COLUMN     "credencialUsuario" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "postos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
