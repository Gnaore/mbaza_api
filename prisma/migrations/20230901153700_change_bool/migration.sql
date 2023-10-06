-- AlterTable
ALTER TABLE `Propriete` MODIFY `proprieteSurface` DOUBLE NULL DEFAULT 0,
    MODIFY `proprieteNbrEtage` INTEGER NULL DEFAULT 0,
    MODIFY `proprieteNbrChambre` INTEGER NULL DEFAULT 0,
    MODIFY `proprieteNbreSalleBain` INTEGER NULL DEFAULT 0,
    MODIFY `proprietePret` DOUBLE NULL DEFAULT 0,
    MODIFY `proprieteJardin` BOOLEAN NULL DEFAULT false,
    MODIFY `proprietePiscine` BOOLEAN NULL DEFAULT false,
    MODIFY `proprieteGarage` BOOLEAN NULL DEFAULT false,
    MODIFY `proprieteBalcon` BOOLEAN NULL DEFAULT false,
    MODIFY `proprieteChemine` BOOLEAN NULL DEFAULT false,
    MODIFY `proprieteClimatisation` BOOLEAN NULL DEFAULT false,
    MODIFY `proprieteEquipement` BOOLEAN NULL DEFAULT false,
    MODIFY `proprieteequipementdetails` TEXT NULL,
    MODIFY `proprieteLongitude` DOUBLE NULL DEFAULT 0,
    MODIFY `proprieteLatitude` DOUBLE NULL DEFAULT 0;
