-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "budget_min" INTEGER NOT NULL,
    "budget_max" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "success_rate" TEXT,
    "country" TEXT,
    "status" TEXT,
    "project_progress" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("budget_max", "budget_min", "country", "createdAt", "description", "id", "project_progress", "rating", "status", "success_rate", "title", "updatedAt", "userId") SELECT "budget_max", "budget_min", "country", "createdAt", "description", "id", "project_progress", "rating", "status", "success_rate", "title", "updatedAt", "userId" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE UNIQUE INDEX "Projects_userId_key" ON "Projects"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
