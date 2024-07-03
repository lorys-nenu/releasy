/*
  Warnings:

  - A unique constraint covering the columns `[identifier]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "identifier" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Organization_identifier_key" ON "Organization"("identifier");
