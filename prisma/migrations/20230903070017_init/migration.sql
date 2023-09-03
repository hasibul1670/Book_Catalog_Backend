-- AlterTable
ALTER TABLE "user" ADD COLUMN     "orderId" TEXT;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
