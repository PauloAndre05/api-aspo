/*
  Warnings:

  - You are about to drop the column `limite` on the `postos` table. All the data in the column will be lost.
  - Added the required column `limiteDiario` to the `postos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "postos" DROP COLUMN "limite",
ADD COLUMN     "limiteDiario" INTEGER NOT NULL;
