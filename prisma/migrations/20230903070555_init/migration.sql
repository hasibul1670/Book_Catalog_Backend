-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_orderId_fkey";

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
