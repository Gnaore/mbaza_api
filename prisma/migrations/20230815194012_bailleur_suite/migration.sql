/*
  Warnings:

  - You are about to alter the column `bailleurRevenu` on the `Bailleur` table. The data in that column could be lost. The data in that column will be cast from `MediumInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `Bailleur` MODIFY `bailleurRevenu` INTEGER NULL;
