/*
  Warnings:

  - You are about to drop the column `agendamentoId` on the `Horario` table. All the data in the column will be lost.
  - Added the required column `horaId` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Horario" DROP CONSTRAINT "Horario_agendamentoId_fkey";

-- AlterTable
ALTER TABLE "Horario" DROP COLUMN "agendamentoId";

-- AlterTable
ALTER TABLE "agendamentos" ADD COLUMN     "horaId" TEXT NOT NULL,
ALTER COLUMN "dataAgenda" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_horaId_fkey" FOREIGN KEY ("horaId") REFERENCES "Horario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
