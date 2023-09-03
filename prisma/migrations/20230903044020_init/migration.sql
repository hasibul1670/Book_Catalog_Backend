/*
  Warnings:

  - You are about to drop the column `author` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `publicationDate` on the `books` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "author",
DROP COLUMN "genre",
DROP COLUMN "price",
DROP COLUMN "publicationDate";
