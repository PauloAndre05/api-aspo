/*
  Warnings:

  - You are about to drop the `feedback` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "feedback";

-- CreateTable
CREATE TABLE "newslettrs" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,

    CONSTRAINT "newslettrs_pkey" PRIMARY KEY ("id")
);
