/*
  Warnings:

  - A unique constraint covering the columns `[comprovativo]` on the table `agendamentos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "agendamentos_comprovativo_key" ON "agendamentos"("comprovativo");
