/*
  Warnings:

  - Added the required column `merchant` to the `UserTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "PlaidSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "PlaidSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserTransaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "transactionDate" DATETIME NOT NULL,
    "amount" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "merchant" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "UserTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserTransaction" ("amount", "category", "id", "transactionDate", "userId") SELECT "amount", "category", "id", "transactionDate", "userId" FROM "UserTransaction";
DROP TABLE "UserTransaction";
ALTER TABLE "new_UserTransaction" RENAME TO "UserTransaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "PlaidSession_sessionToken_key" ON "PlaidSession"("sessionToken");
