-- CreateTable
CREATE TABLE `Bailleur` (
    `bailleurId` INTEGER NOT NULL AUTO_INCREMENT,
    `bailleurNomPrenoms` VARCHAR(255) NOT NULL,
    `bailleurTelephone` VARCHAR(65) NOT NULL,
    `bailleurAdresse` TEXT NOT NULL,
    `bailleurEmail` VARCHAR(255) NOT NULL,
    `bailleurDateNaissance` DATE NOT NULL,
    `bailleurNumero` VARCHAR(65) NULL,
    `banqueId` INTEGER NOT NULL,
    `bailleurNumCompte` VARCHAR(65) NULL,
    `bailleurRevenu` MEDIUMINT NULL,
    `bailleurTaux` DOUBLE NULL,
    `bailleurPersUrgence` TEXT NULL,
    `bailleurTelUrgence` VARCHAR(65) NULL,
    `bailleurRelationUrgence` VARCHAR(255) NULL,
    `bailleurlienCNI` TEXT NOT NULL,
    `bailleurLienPhoto` TEXT NOT NULL,

    UNIQUE INDEX `Bailleur_bailleurTelephone_key`(`bailleurTelephone`),
    UNIQUE INDEX `Bailleur_bailleurEmail_key`(`bailleurEmail`),
    PRIMARY KEY (`bailleurId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Propriete` (
    `proprieteId` INTEGER NOT NULL AUTO_INCREMENT,
    `proprieteAdresse` TEXT NOT NULL,
    `proprieteType` VARCHAR(65) NOT NULL,
    `proprieteAnnee` YEAR NOT NULL,
    `proprieteSurface` DOUBLE NULL,
    `proprieteNbrEtage` INTEGER NULL,
    `proprieteNbrChambre` INTEGER NULL,
    `proprieteNbreSalleBain` INTEGER NULL,
    `proprieteDescription` TEXT NULL,
    `proprieteStatu` VARCHAR(65) NOT NULL,
    `proprietePrix` DOUBLE NOT NULL,
    `proprietePret` DOUBLE NULL,
    `proprieteJardin` BOOLEAN NOT NULL DEFAULT false,
    `proprietePiscine` BOOLEAN NOT NULL DEFAULT false,
    `proprieteGarage` BOOLEAN NOT NULL DEFAULT false,
    `proprieteBalcon` BOOLEAN NOT NULL DEFAULT false,
    `proprieteChemine` BOOLEAN NOT NULL DEFAULT false,
    `proprieteClimatisation` BOOLEAN NOT NULL DEFAULT false,
    `proprieteEquipement` BOOLEAN NOT NULL DEFAULT false,
    `proprieteequipementdetails` TEXT NOT NULL,
    `proprieteLongitude` DOUBLE NULL,
    `proprieteLatitude` DOUBLE NULL,
    `proprieteQuartier` TEXT NULL,
    `proprieteLienPhoto` TEXT NOT NULL,
    `bailleurId` INTEGER NOT NULL,

    PRIMARY KEY (`proprieteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bailleur` ADD CONSTRAINT `Bailleur_banqueId_fkey` FOREIGN KEY (`banqueId`) REFERENCES `Banque`(`banqueId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Propriete` ADD CONSTRAINT `Propriete_bailleurId_fkey` FOREIGN KEY (`bailleurId`) REFERENCES `Bailleur`(`bailleurId`) ON DELETE CASCADE ON UPDATE CASCADE;
