/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Glass` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Glass` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Step` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Step` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Tool` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Glass" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "color" VARCHAR(255) NOT NULL DEFAULT '#A5D4FF';

-- AlterTable
ALTER TABLE "Step" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
