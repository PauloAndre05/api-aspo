/*
  Warnings:

  - Added the required column `email` to the `newslettrs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "newslettrs" ADD COLUMN     "email" TEXT NOT NULL;
