-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL,
    "authToken" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "defaultGroupId" TEXT NOT NULL,
    CONSTRAINT "User_defaultGroupId_fkey" FOREIGN KEY ("defaultGroupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UsersOnGroups" (
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedO" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "groupId"),
    CONSTRAINT "UsersOnGroups_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsersOnGroups_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Invite" (
    "isAccepted" BOOLEAN NOT NULL DEFAULT false,
    "eventId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedO" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("eventId", "groupId"),
    CONSTRAINT "Invite_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invite_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "GroupsHostingEvents" (
    "eventId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("eventId", "groupId"),
    CONSTRAINT "GroupsHostingEvents_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupsHostingEvents_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_authToken_key" ON "User"("authToken");
