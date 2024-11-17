/*
  Warnings:

  - You are about to drop the `working_days` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `date_of_birth` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "working_days_day_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "working_days";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "WorkingDays" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "day" TEXT NOT NULL
);

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
    CONSTRAINT "Appointment_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor" ("doctor_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Appointment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient" ("patient_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("appointment_id", "date", "doctor_id", "notes", "patient_id", "status", "time") SELECT "appointment_id", "date", "doctor_id", "notes", "patient_id", "status", "time" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
CREATE TABLE "new_DepartmentStaff" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "staff_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    CONSTRAINT "DepartmentStaff_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Staff" ("staff_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DepartmentStaff_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department" ("dept_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_DepartmentStaff" ("department_id", "id", "staff_id") SELECT "department_id", "id", "staff_id" FROM "DepartmentStaff";
DROP TABLE "DepartmentStaff";
ALTER TABLE "new_DepartmentStaff" RENAME TO "DepartmentStaff";
CREATE UNIQUE INDEX "DepartmentStaff_staff_id_department_id_key" ON "DepartmentStaff"("staff_id", "department_id");
CREATE TABLE "new_Doctor" (
    "doctor_id" TEXT NOT NULL PRIMARY KEY,
    "specializations" TEXT,
    "qualifications" TEXT,
    "years_of_experience" INTEGER NOT NULL,
    "enable_online_appointments" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Doctor_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Staff" ("staff_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Doctor" ("doctor_id", "enable_online_appointments", "qualifications", "specializations", "years_of_experience") SELECT "doctor_id", "enable_online_appointments", "qualifications", "specializations", "years_of_experience" FROM "Doctor";
DROP TABLE "Doctor";
ALTER TABLE "new_Doctor" RENAME TO "Doctor";
CREATE TABLE "new_DoctorTreatmentService" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "doctor_id" TEXT NOT NULL,
    "treatment_service_id" TEXT NOT NULL,
    CONSTRAINT "DoctorTreatmentService_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor" ("doctor_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DoctorTreatmentService_treatment_service_id_fkey" FOREIGN KEY ("treatment_service_id") REFERENCES "treatment_service" ("treatment_service_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_DoctorTreatmentService" ("doctor_id", "id", "treatment_service_id") SELECT "doctor_id", "id", "treatment_service_id" FROM "DoctorTreatmentService";
DROP TABLE "DoctorTreatmentService";
ALTER TABLE "new_DoctorTreatmentService" RENAME TO "DoctorTreatmentService";
CREATE UNIQUE INDEX "DoctorTreatmentService_doctor_id_treatment_service_id_key" ON "DoctorTreatmentService"("doctor_id", "treatment_service_id");
CREATE TABLE "new_Insurance" (
    "insurance_id" TEXT NOT NULL PRIMARY KEY,
    "company" TEXT NOT NULL,
    "details" TEXT,
    "policy_no" INTEGER NOT NULL,
    "patient_id" TEXT NOT NULL,
    CONSTRAINT "Insurance_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient" ("patient_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Insurance" ("company", "details", "insurance_id", "patient_id", "policy_no") SELECT "company", "details", "insurance_id", "patient_id", "policy_no" FROM "Insurance";
DROP TABLE "Insurance";
ALTER TABLE "new_Insurance" RENAME TO "Insurance";
CREATE UNIQUE INDEX "Insurance_policy_no_key" ON "Insurance"("policy_no");
CREATE TABLE "new_LabTest" (
    "lab_test_id" TEXT NOT NULL PRIMARY KEY,
    "patient_id" TEXT NOT NULL,
    "test_name" TEXT NOT NULL,
    "date_requested" DATETIME NOT NULL,
    "date_completed" DATETIME,
    "results" TEXT,
    CONSTRAINT "LabTest_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient" ("patient_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_LabTest" ("date_completed", "date_requested", "lab_test_id", "patient_id", "results", "test_name") SELECT "date_completed", "date_requested", "lab_test_id", "patient_id", "results", "test_name" FROM "LabTest";
DROP TABLE "LabTest";
ALTER TABLE "new_LabTest" RENAME TO "LabTest";
CREATE TABLE "new_MedicalHistory" (
    "history_id" TEXT NOT NULL PRIMARY KEY,
    "patient_id" TEXT NOT NULL,
    "allergies" TEXT,
    "surgeries" TEXT,
    "chronic_conditions" TEXT,
    "medications" TEXT,
    "notes" TEXT,
    CONSTRAINT "MedicalHistory_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient" ("patient_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MedicalHistory" ("allergies", "chronic_conditions", "history_id", "medications", "notes", "patient_id", "surgeries") SELECT "allergies", "chronic_conditions", "history_id", "medications", "notes", "patient_id", "surgeries" FROM "MedicalHistory";
DROP TABLE "MedicalHistory";
ALTER TABLE "new_MedicalHistory" RENAME TO "MedicalHistory";
CREATE UNIQUE INDEX "MedicalHistory_patient_id_key" ON "MedicalHistory"("patient_id");
CREATE TABLE "new_Message" (
    "message_id" TEXT NOT NULL PRIMARY KEY,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "message_content" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    CONSTRAINT "Message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User" ("user_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Message_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chat" ("chat_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("chat_id", "is_read", "message_content", "message_id", "sender_id", "timestamp") SELECT "chat_id", "is_read", "message_content", "message_id", "sender_id", "timestamp" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
CREATE TABLE "new_Patient" (
    "patient_id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT,
    "last_visit_date" DATETIME NOT NULL,
    CONSTRAINT "Patient_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User" ("user_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Patient" ("address", "last_visit_date", "patient_id") SELECT "address", "last_visit_date", "patient_id" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
CREATE TABLE "new_Prescription" (
    "prescription_id" TEXT NOT NULL PRIMARY KEY,
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "medication" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "issue_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Prescription_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor" ("doctor_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Prescription_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient" ("patient_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Prescription" ("doctor_id", "dosage", "instructions", "issue_date", "medication", "patient_id", "prescription_id") SELECT "doctor_id", "dosage", "instructions", "issue_date", "medication", "patient_id", "prescription_id" FROM "Prescription";
DROP TABLE "Prescription";
ALTER TABLE "new_Prescription" RENAME TO "Prescription";
CREATE TABLE "new_Staff" (
    "staff_id" TEXT NOT NULL PRIMARY KEY,
    "employment_date" DATETIME NOT NULL,
    "employed_until" DATETIME,
    "role_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "employment_type" TEXT NOT NULL,
    CONSTRAINT "Staff_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("user_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Staff" ("department_id", "employed_until", "employment_date", "employment_type", "role_id", "staff_id") SELECT "department_id", "employed_until", "employment_date", "employment_type", "role_id", "staff_id" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
CREATE TABLE "new_StaffWorkingDays" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "staff_id" TEXT NOT NULL,
    "working_day_id" TEXT NOT NULL,
    CONSTRAINT "StaffWorkingDays_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Staff" ("staff_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "StaffWorkingDays_working_day_id_fkey" FOREIGN KEY ("working_day_id") REFERENCES "WorkingDays" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_StaffWorkingDays" ("id", "staff_id", "working_day_id") SELECT "id", "staff_id", "working_day_id" FROM "StaffWorkingDays";
DROP TABLE "StaffWorkingDays";
ALTER TABLE "new_StaffWorkingDays" RENAME TO "StaffWorkingDays";
CREATE UNIQUE INDEX "StaffWorkingDays_staff_id_working_day_id_key" ON "StaffWorkingDays"("staff_id", "working_day_id");
CREATE TABLE "new_User" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "phone_no" TEXT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "avatar" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "last_login" DATETIME,
    "user_type" TEXT NOT NULL
);
INSERT INTO "new_User" ("avatar", "created_at", "date_of_birth", "email", "first_name", "gender", "is_active", "last_login", "last_name", "password_hash", "phone_no", "updated_at", "user_id", "user_type", "username") SELECT "avatar", "created_at", "date_of_birth", "email", "first_name", "gender", "is_active", "last_login", "last_name", "password_hash", "phone_no", "updated_at", "user_id", "user_type", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "WorkingDays_day_key" ON "WorkingDays"("day");
