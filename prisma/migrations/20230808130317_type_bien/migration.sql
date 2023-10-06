/*
  Warnings:

  - Added the required column `typebienId` to the `Propriete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Propriete` ADD COLUMN `typebienId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Typebien` (
    `typebienId` INTEGER NOT NULL AUTO_INCREMENT,
    `libelleTypebien` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`typebienId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Propriete` ADD CONSTRAINT `Propriete_typebienId_fkey` FOREIGN KEY (`typebienId`) REFERENCES `Typebien`(`typebienId`) ON DELETE CASCADE ON UPDATE CASCADE;
