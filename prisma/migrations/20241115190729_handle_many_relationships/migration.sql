/*
  Warnings:

  - You are about to drop the column `doctorDoctor_id` on the `treatment_service` table. All the data in the column will be lost.
  - You are about to drop the column `staffStaff_id` on the `working_days` table. All the data in the column will be lost.
  - The required column `id` was added to the `working_days` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateTable
CREATE TABLE "DepartmentStaff" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "staff_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    CONSTRAINT "DepartmentStaff_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Staff" ("staff_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DepartmentStaff_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department" ("dept_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StaffWorkingDays" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "staff_id" TEXT NOT NULL,
    "working_day_id" TEXT NOT NULL,
    CONSTRAINT "StaffWorkingDays_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Staff" ("staff_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StaffWorkingDays_working_day_id_fkey" FOREIGN KEY ("working_day_id") REFERENCES "working_days" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DoctorTreatmentService" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "doctor_id" TEXT NOT NULL,
    "treatment_service_id" TEXT NOT NULL,
    CONSTRAINT "DoctorTreatmentService_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor" ("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DoctorTreatmentService_treatment_service_id_fkey" FOREIGN KEY ("treatment_service_id") REFERENCES "treatment_service" ("treatment_service_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Staff" (
    "staff_id" TEXT NOT NULL PRIMARY KEY,
    "employment_date" DATETIME NOT NULL,
    "employed_until" DATETIME,
    "role_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "employment_type" TEXT NOT NULL,
    CONSTRAINT "Staff_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Staff" ("department_id", "employed_until", "employment_date", "employment_type", "role_id", "staff_id") SELECT "department_id", "employed_until", "employment_date", "employment_type", "role_id", "staff_id" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
CREATE TABLE "new_treatment_service" (
    "treatment_service_id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL
);
INSERT INTO "new_treatment_service" ("description", "treatment_service_id") SELECT "description", "treatment_service_id" FROM "treatment_service";
DROP TABLE "treatment_service";
ALTER TABLE "new_treatment_service" RENAME TO "treatment_service";
CREATE TABLE "new_working_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "day" TEXT NOT NULL
);
INSERT INTO "new_working_days" ("day") SELECT "day" FROM "working_days";
DROP TABLE "working_days";
ALTER TABLE "new_working_days" RENAME TO "working_days";
CREATE UNIQUE INDEX "working_days_day_key" ON "working_days"("day");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentStaff_staff_id_department_id_key" ON "DepartmentStaff"("staff_id", "department_id");

-- CreateIndex
CREATE UNIQUE INDEX "StaffWorkingDays_staff_id_working_day_id_key" ON "StaffWorkingDays"("staff_id", "working_day_id");

-- CreateIndex
CREATE UNIQUE INDEX "DoctorTreatmentService_doctor_id_treatment_service_id_key" ON "DoctorTreatmentService"("doctor_id", "treatment_service_id");
