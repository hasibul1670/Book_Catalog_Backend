/*
  Warnings:

  - A unique constraint covering the columns `[orderedId]` on the table `order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "order_orderedId_key" ON "order"("orderedId");
