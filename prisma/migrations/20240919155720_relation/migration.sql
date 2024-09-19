/*
  Warnings:

  - The values [notAvailable,available] on the enum `Villa_availibilty` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Villa` MODIFY `availibilty` ENUM('AVAILABLE', 'NOT_AVAILABLE') NOT NULL;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `villaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_villaId_fkey` FOREIGN KEY (`villaId`) REFERENCES `Villa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
