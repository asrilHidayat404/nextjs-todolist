/*
  Warnings:

  - You are about to drop the column `date` on the `todos` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `todos` DROP COLUMN `date`,
    DROP COLUMN `time`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deadline` VARCHAR(191) NULL,
    ADD COLUMN `timeEnd` VARCHAR(191) NULL;
