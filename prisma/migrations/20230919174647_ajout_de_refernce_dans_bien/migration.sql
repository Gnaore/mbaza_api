/*
  Warnings:

  - Added the required column `bienReference` to the `Bien` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bien` ADD COLUMN `bienReference` VARCHAR(65) NOT NULL;
