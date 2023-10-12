/*
  Warnings:

  - A unique constraint covering the columns `[proprieteCode]` on the table `Propriete` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Locataire` (
    `locataireId` INTEGER NOT NULL AUTO_INCREMENT,
    `locataireRef` VARCHAR(65) NOT NULL,
    `locataireNom` VARCHAR(255) NOT NULL,
    `locataireDatenais` DATE NOT NULL,
    `locataireNationalite` VARCHAR(65) NOT NULL,
    `locataireTel` VARCHAR(65) NOT NULL,
    `locataireEmail` VARCHAR(255) NOT NULL,
    `locataireSituationmatri` VARCHAR(255) NOT NULL,
    `locataireNbrecharge` INTEGER NULL DEFAULT 0,
    `locataireTypecontrat` VARCHAR(65) NULL,
    `locataireProfession` VARCHAR(255) NULL,
    `locataireSalaire` INTEGER NULL DEFAULT 0,
    `locataireBanque` VARCHAR(65) NULL,
    `locataireNomgarant` VARCHAR(255) NULL,
    `locataireTelgarant` VARCHAR(255) NULL,
    `locataireEmailgarant` VARCHAR(255) NULL,
    `locatairePhoto` VARCHAR(255) NULL,
    `proprieteCode` VARCHAR(191) NOT NULL,
    `bailleurId` INTEGER NOT NULL,

    UNIQUE INDEX `Locataire_proprieteCode_key`(`proprieteCode`),
    PRIMARY KEY (`locataireId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Propriete_proprieteCode_key` ON `Propriete`(`proprieteCode`);

-- AddForeignKey
ALTER TABLE `Locataire` ADD CONSTRAINT `Locataire_proprieteCode_fkey` FOREIGN KEY (`proprieteCode`) REFERENCES `Propriete`(`proprieteCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Locataire` ADD CONSTRAINT `Locataire_bailleurId_fkey` FOREIGN KEY (`bailleurId`) REFERENCES `Bailleur`(`bailleurId`) ON DELETE CASCADE ON UPDATE CASCADE;
