/*
  Warnings:

  - You are about to drop the column `updatedO` on the `Invite` table. All the data in the column will be lost.
  - You are about to drop the column `updatedO` on the `UsersOnGroups` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Invite" (
    "isAccepted" BOOLEAN NOT NULL DEFAULT false,
    "eventId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("eventId", "groupId"),
    CONSTRAINT "Invite_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invite_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Invite" ("createdOn", "eventId", "groupId", "isAccepted") SELECT "createdOn", "eventId", "groupId", "isAccepted" FROM "Invite";
DROP TABLE "Invite";
ALTER TABLE "new_Invite" RENAME TO "Invite";
CREATE TABLE "new_UsersOnGroups" (
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "groupId"),
    CONSTRAINT "UsersOnGroups_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsersOnGroups_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UsersOnGroups" ("createdOn", "groupId", "userId") SELECT "createdOn", "groupId", "userId" FROM "UsersOnGroups";
DROP TABLE "UsersOnGroups";
ALTER TABLE "new_UsersOnGroups" RENAME TO "UsersOnGroups";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
