/*
  Warnings:

  - You are about to drop the `_UserChats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Doctor_doctor_id_key";

-- DropIndex
DROP INDEX "_UserChats_B_index";

-- DropIndex
DROP INDEX "_UserChats_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_UserChats";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "appointment_id" TEXT NOT NULL PRIMARY KEY,
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "notes" TEXT,
    CONSTRAINT "Appointment_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor" ("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("appointment_id", "date", "doctor_id", "notes", "patient_id", "status", "time") SELECT "appointment_id", "date", "doctor_id", "notes", "patient_id", "status", "time" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
CREATE TABLE "new_Staff" (
    "staff_id" TEXT NOT NULL PRIMARY KEY,
    "employment_date" DATETIME NOT NULL,
    "employed_until" DATETIME,
    "role_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    CONSTRAINT "Staff_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Staff_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department" ("dept_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Staff" ("department_id", "employed_until", "employment_date", "role_id", "staff_id") SELECT "department_id", "employed_until", "employment_date", "role_id", "staff_id" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
