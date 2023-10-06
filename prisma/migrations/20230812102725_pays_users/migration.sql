/*
  Warnings:

  - Made the column `paysId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_paysId_fkey`;

-- AlterTable
ALTER TABLE `User` MODIFY `paysId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_paysId_fkey` FOREIGN KEY (`paysId`) REFERENCES `Pays`(`paysId`) ON DELETE CASCADE ON UPDATE CASCADE;
