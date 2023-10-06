/*
  Warnings:

  - You are about to drop the column `paysBanque` on the `Banque` table. All the data in the column will be lost.
  - You are about to drop the column `pays` on the `User` table. All the data in the column will be lost.
  - Added the required column `paysId` to the `Banque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paysId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Banque` DROP COLUMN `paysBanque`,
    ADD COLUMN `paysId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `pays`,
    ADD COLUMN `paysId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Pays` (
    `paysId` INTEGER NOT NULL AUTO_INCREMENT,
    `libellePays` VARCHAR(255) NOT NULL,
    `codePays` VARCHAR(65) NOT NULL,

    PRIMARY KEY (`paysId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_paysId_fkey` FOREIGN KEY (`paysId`) REFERENCES `Pays`(`paysId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Banque` ADD CONSTRAINT `Banque_paysId_fkey` FOREIGN KEY (`paysId`) REFERENCES `Pays`(`paysId`) ON DELETE CASCADE ON UPDATE CASCADE;
