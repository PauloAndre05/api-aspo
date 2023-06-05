/*
  Warnings:

  - The primary key for the `postos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `servicos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_postoId_fkey";

-- DropForeignKey
ALTER TABLE "agendamentos" DROP CONSTRAINT "agendamentos_postoId_fkey";

-- DropForeignKey
ALTER TABLE "agendamentos" DROP CONSTRAINT "agendamentos_servicoId_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "postoId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "agendamentos" ALTER COLUMN "servicoId" SET DATA TYPE TEXT,
ALTER COLUMN "postoId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "postos" DROP CONSTRAINT "postos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "postos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "postos_id_seq";

-- AlterTable
ALTER TABLE "servicos" DROP CONSTRAINT "servicos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "servicos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "servicos_id_seq";

-- AddForeignKey
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "servicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "postos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "postos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
