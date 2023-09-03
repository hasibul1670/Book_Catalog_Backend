-- AlterTable
ALTER TABLE "books" ADD COLUMN     "author" TEXT,
ADD COLUMN     "genre" TEXT,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "publicationDate" TIMESTAMP(3),
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;
