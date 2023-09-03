/*
  Warnings:

  - You are about to drop the `orderBook` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `orderedId` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orderBook" DROP CONSTRAINT "orderBook_bookId_fkey";

-- DropForeignKey
ALTER TABLE "orderBook" DROP CONSTRAINT "orderBook_orderId_fkey";

-- AlterTable
ALTER TABLE "order" ADD COLUMN     "orderedId" TEXT NOT NULL;

-- DropTable
DROP TABLE "orderBook";

-- CreateTable
CREATE TABLE "orderedBook" (
    "id" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orderedBook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_orderedId_fkey" FOREIGN KEY ("orderedId") REFERENCES "orderedBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderedBook" ADD CONSTRAINT "orderedBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
