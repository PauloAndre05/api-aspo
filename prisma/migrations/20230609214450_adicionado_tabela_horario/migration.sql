/*
  Warnings:

  - Added the required column `bi` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agendamentos" ADD COLUMN     "bi" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Horario" (
    "id" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "agendamentoId" TEXT NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Horario" ADD CONSTRAINT "Horario_agendamentoId_fkey" FOREIGN KEY ("agendamentoId") REFERENCES "agendamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
