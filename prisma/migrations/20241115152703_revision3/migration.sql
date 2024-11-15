/*
  Warnings:

  - Added the required column `last_visit_date` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employment_type` to the `Staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "working_days" (
    "day" TEXT NOT NULL,
    "staffStaff_id" TEXT,
    CONSTRAINT "working_days_staffStaff_id_fkey" FOREIGN KEY ("staffStaff_id") REFERENCES "Staff" ("staff_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "treatment_service" (
    "treatment_service_id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "doctorDoctor_id" TEXT,
    CONSTRAINT "treatment_service_doctorDoctor_id_fkey" FOREIGN KEY ("doctorDoctor_id") REFERENCES "Doctor" ("doctor_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Patient" (
    "patient_id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT,
    "last_visit_date" DATETIME NOT NULL,
    CONSTRAINT "Patient_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Patient" ("address", "patient_id") SELECT "address", "patient_id" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
CREATE TABLE "new_Staff" (
    "staff_id" TEXT NOT NULL PRIMARY KEY,
    "employment_date" DATETIME NOT NULL,
    "employed_until" DATETIME,
    "role_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "employment_type" TEXT NOT NULL,
    CONSTRAINT "Staff_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Staff_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department" ("dept_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Staff" ("department_id", "employed_until", "employment_date", "role_id", "staff_id") SELECT "department_id", "employed_until", "employment_date", "role_id", "staff_id" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
CREATE TABLE "new_User" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "phone_no" TEXT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" DATETIME,
    "gender" TEXT NOT NULL,
    "avatar" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "last_login" DATETIME,
    "user_type" TEXT NOT NULL
);
INSERT INTO "new_User" ("created_at", "date_of_birth", "email", "first_name", "is_active", "last_login", "last_name", "password_hash", "phone_no", "updated_at", "user_id", "user_type", "username") SELECT "created_at", "date_of_birth", "email", "first_name", "is_active", "last_login", "last_name", "password_hash", "phone_no", "updated_at", "user_id", "user_type", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "working_days_day_key" ON "working_days"("day");
