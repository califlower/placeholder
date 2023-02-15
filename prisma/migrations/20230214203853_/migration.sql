/*
  Warnings:

  - A unique constraint covering the columns `[defaultGroupId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_defaultGroupId_key" ON "User"("defaultGroupId");
