/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Glass` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Glass" ALTER COLUMN "description" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Glass_name_key" ON "Glass"("name");
