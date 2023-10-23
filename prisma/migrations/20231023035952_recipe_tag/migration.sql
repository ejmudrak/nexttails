/*
  Warnings:

  - You are about to alter the column `color` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Char(7)`.
  - You are about to alter the column `name` on the `Tool` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[name,recipeId]` on the table `Tool` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "color" SET DATA TYPE CHAR(7);

-- AlterTable
ALTER TABLE "Tool" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_recipeId_key" ON "Tag"("name", "recipeId");

-- CreateIndex
CREATE UNIQUE INDEX "Tool_name_recipeId_key" ON "Tool"("name", "recipeId");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
