/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UserAdminGeral` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserAdminGeral_email_key" ON "UserAdminGeral"("email");
