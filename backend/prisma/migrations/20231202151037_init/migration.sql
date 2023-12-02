-- CreateTable
CREATE TABLE "Teacher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startYear" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attitude" INTEGER NOT NULL,
    "approach" INTEGER NOT NULL,
    "style" INTEGER NOT NULL,
    "course" INTEGER NOT NULL,
    "extraWork" INTEGER NOT NULL,
    "tp_td" INTEGER NOT NULL,
    "exam" INTEGER NOT NULL,
    "comment" TEXT,
    "studentEmail" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    CONSTRAINT "Evaluation_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");
