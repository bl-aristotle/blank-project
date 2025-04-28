-- CreateTable
CREATE TABLE "Floorplan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" REAL NOT NULL,
    "sqft" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "imageUrl" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "unitCount" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
