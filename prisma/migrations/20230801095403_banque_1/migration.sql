/*
  Warnings:

  - You are about to alter the column `contact` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(65)`.
  - You are about to alter the column `pays` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(65)`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `contact` VARCHAR(65) NOT NULL,
    MODIFY `pays` VARCHAR(65) NOT NULL;

-- CreateTable
CREATE TABLE `Banque` (
    `banqueId` INTEGER NOT NULL AUTO_INCREMENT,
    `banqueCode` VARCHAR(8) NOT NULL,
    `libelleBanque` VARCHAR(255) NOT NULL,
    `sigleBanque` VARCHAR(65) NOT NULL,
    `paysBanque` VARCHAR(65) NOT NULL,
    `contactBanque` VARCHAR(65) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Banque_banqueCode_key`(`banqueCode`),
    PRIMARY KEY (`banqueId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
