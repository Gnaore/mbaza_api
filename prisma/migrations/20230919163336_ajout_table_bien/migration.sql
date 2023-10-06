-- CreateTable
CREATE TABLE `Bien` (
    `bienId` INTEGER NOT NULL AUTO_INCREMENT,
    `bienLibelle` VARCHAR(225) NOT NULL,
    `bienCategorie` VARCHAR(65) NOT NULL,
    `bienDescription` TEXT NOT NULL,
    `bienSurface` DOUBLE NULL DEFAULT 0,
    `bienNbrePiece` INTEGER NULL DEFAULT 0,
    `bienPrix` INTEGER NOT NULL DEFAULT 0,
    `bienVille` VARCHAR(65) NOT NULL,
    `bienCommuneQuartier` VARCHAR(65) NOT NULL,
    `bienAdresse` VARCHAR(255) NOT NULL,
    `bienNomBailleur` VARCHAR(255) NOT NULL,
    `bienContactBailleur` VARCHAR(65) NOT NULL,
    `bienContrat` VARCHAR(255) NOT NULL,
    `bienImage` VARCHAR(255) NOT NULL,
    `typebienId` INTEGER NOT NULL,

    PRIMARY KEY (`bienId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bien` ADD CONSTRAINT `Bien_typebienId_fkey` FOREIGN KEY (`typebienId`) REFERENCES `Typebien`(`typebienId`) ON DELETE CASCADE ON UPDATE CASCADE;
