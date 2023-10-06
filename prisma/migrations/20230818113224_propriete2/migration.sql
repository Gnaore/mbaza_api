/*
  Warnings:

  - Added the required column `proprieteCode` to the `Propriete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Propriete` ADD COLUMN `proprieteCode` VARCHAR(65) NOT NULL;
