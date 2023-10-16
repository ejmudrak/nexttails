/*
  Warnings:

  - A unique constraint covering the columns `[name,amount,recipeId]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Glass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('CUP', 'DASH', 'NONE', 'OUNCE', 'TABLESPOON', 'TEASPOON');

-- AlterTable
ALTER TABLE "Glass" ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "unit" "Unit" NOT NULL;

-- AlterTable
ALTER TABLE "Step" ALTER COLUMN "description" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_amount_recipeId_key" ON "Ingredient"("name", "amount", "recipeId");
