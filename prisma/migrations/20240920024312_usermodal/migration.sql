/*
  Warnings:

  - Added the required column `subscriptionDate` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionEndDate` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Villa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Villa` ADD COLUMN `subscriptionDate` DATETIME(3) NOT NULL,
    ADD COLUMN `subscriptionEndDate` DATETIME(3) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `villaId` INTEGER NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Villa` ADD CONSTRAINT `Villa_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
