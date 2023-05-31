/*
  Warnings:

  - The primary key for the `postos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `postos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `postoId` on the `agendamentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "agendamentos" DROP CONSTRAINT "agendamentos_postoId_fkey";

-- AlterTable
ALTER TABLE "agendamentos" DROP COLUMN "postoId",
ADD COLUMN     "postoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "postos" DROP CONSTRAINT "postos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "postos_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "postos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
