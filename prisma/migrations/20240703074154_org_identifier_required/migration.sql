/*
  Warnings:

  - Made the column `identifier` on table `Organization` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Organization" ALTER COLUMN "identifier" SET NOT NULL;
