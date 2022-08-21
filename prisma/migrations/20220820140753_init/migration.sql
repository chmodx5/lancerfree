/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `country` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `reviews` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `WinningBids` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bidId` to the `WinningBids` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `WinningBids` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `WinningBids` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectsId` to the `Skills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Skills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Bids` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Bids` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Project";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "budget_min" INTEGER NOT NULL,
    "budget_max" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "success_rate" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "project_progress" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "success_rate" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Profile" ("createdAt", "description", "id", "rating", "success_rate", "title", "updatedAt") SELECT "createdAt", "description", "id", "rating", "success_rate", "title", "updatedAt" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");
CREATE TABLE "new_Reviews" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "profileId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "Reviews_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reviews_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reviews" ("createdAt", "description", "id", "rating", "title", "updatedAt") SELECT "createdAt", "description", "id", "rating", "title", "updatedAt" FROM "Reviews";
DROP TABLE "Reviews";
ALTER TABLE "new_Reviews" RENAME TO "Reviews";
CREATE UNIQUE INDEX "Reviews_profileId_key" ON "Reviews"("profileId");
CREATE UNIQUE INDEX "Reviews_projectId_key" ON "Reviews"("projectId");
CREATE TABLE "new_WinningBids" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bid_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "bidId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WinningBids_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Bids" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WinningBids_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WinningBids_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WinningBids" ("bid_id", "createdAt", "id", "project_id", "updatedAt") SELECT "bid_id", "createdAt", "id", "project_id", "updatedAt" FROM "WinningBids";
DROP TABLE "WinningBids";
ALTER TABLE "new_WinningBids" RENAME TO "WinningBids";
CREATE UNIQUE INDEX "WinningBids_bidId_key" ON "WinningBids"("bidId");
CREATE UNIQUE INDEX "WinningBids_projectId_key" ON "WinningBids"("projectId");
CREATE UNIQUE INDEX "WinningBids_userId_key" ON "WinningBids"("userId");
CREATE TABLE "new_Messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Messages" ("createdAt", "id", "message", "updatedAt") SELECT "createdAt", "id", "message", "updatedAt" FROM "Messages";
DROP TABLE "Messages";
ALTER TABLE "new_Messages" RENAME TO "Messages";
CREATE UNIQUE INDEX "Messages_userId_key" ON "Messages"("userId");
CREATE TABLE "new_Skills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "projectsId" TEXT NOT NULL,
    CONSTRAINT "Skills_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Skills_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Skills" ("createdAt", "id", "title", "updatedAt") SELECT "createdAt", "id", "title", "updatedAt" FROM "Skills";
DROP TABLE "Skills";
ALTER TABLE "new_Skills" RENAME TO "Skills";
CREATE UNIQUE INDEX "Skills_userId_key" ON "Skills"("userId");
CREATE UNIQUE INDEX "Skills_projectsId_key" ON "Skills"("projectsId");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "countryId" TEXT NOT NULL,
    CONSTRAINT "User_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("account_type", "createdAt", "email", "first_name", "id", "last_name", "password", "updatedAt", "username") SELECT "account_type", "createdAt", "email", "first_name", "id", "last_name", "password", "updatedAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_countryId_key" ON "User"("countryId");
CREATE TABLE "new_Bids" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bid_amount" TEXT NOT NULL,
    "delivered_in" TEXT NOT NULL,
    "proposal" INTEGER NOT NULL,
    "budget_max" INTEGER NOT NULL,
    "project_progress" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "projectId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Bids_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bids_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bids" ("bid_amount", "budget_max", "createdAt", "delivered_in", "id", "project_progress", "proposal", "updatedAt") SELECT "bid_amount", "budget_max", "createdAt", "delivered_in", "id", "project_progress", "proposal", "updatedAt" FROM "Bids";
DROP TABLE "Bids";
ALTER TABLE "new_Bids" RENAME TO "Bids";
CREATE UNIQUE INDEX "Bids_projectId_key" ON "Bids"("projectId");
CREATE UNIQUE INDEX "Bids_userId_key" ON "Bids"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Projects_userId_key" ON "Projects"("userId");
