-- CreateTable
CREATE TABLE `Villa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `price` DOUBLE NOT NULL,
    `sale` BOOLEAN NOT NULL DEFAULT false,
    `availibilty` ENUM('notAvailable', 'available') NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `mapUrl` VARCHAR(191) NOT NULL,
    `photos` JSON NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `amenities` JSON NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Villa_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
