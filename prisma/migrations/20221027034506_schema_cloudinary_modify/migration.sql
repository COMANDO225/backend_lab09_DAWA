/*
  Warnings:

  - Added the required column `cloudinary_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Made the column `url_image` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discount` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `cloudinary_id` VARCHAR(1024) NOT NULL,
    MODIFY `url_image` VARCHAR(1024) NOT NULL,
    MODIFY `discount` DOUBLE NOT NULL;
