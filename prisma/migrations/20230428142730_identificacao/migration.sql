/*
  Warnings:

  - You are about to drop the column `altura` on the `identificacao` table. All the data in the column will be lost.
  - You are about to drop the column `bairro` on the `identificacao` table. All the data in the column will be lost.
  - You are about to drop the column `dataEmicao` on the `identificacao` table. All the data in the column will be lost.
  - You are about to drop the column `municipio` on the `identificacao` table. All the data in the column will be lost.
  - You are about to drop the column `naturalidade` on the `identificacao` table. All the data in the column will be lost.
  - You are about to drop the column `nomeMae` on the `identificacao` table. All the data in the column will be lost.
  - You are about to drop the column `nomePai` on the `identificacao` table. All the data in the column will be lost.
  - You are about to drop the column `validade` on the `identificacao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "identificacao" DROP COLUMN "altura",
DROP COLUMN "bairro",
DROP COLUMN "dataEmicao",
DROP COLUMN "municipio",
DROP COLUMN "naturalidade",
DROP COLUMN "nomeMae",
DROP COLUMN "nomePai",
DROP COLUMN "validade";
