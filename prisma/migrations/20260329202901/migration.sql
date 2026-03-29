-- CreateTable
CREATE TABLE "Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "identification" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phones" JSONB NOT NULL,
    "logo" TEXT NOT NULL,
    "frontPageImg" TEXT NOT NULL,
    "geolocalizacion" JSONB NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_email_key" ON "Store"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Store_ownerId_key" ON "Store"("ownerId");
