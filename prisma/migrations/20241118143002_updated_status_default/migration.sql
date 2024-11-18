-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "appointment_id" TEXT NOT NULL PRIMARY KEY,
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Not Finished',
    "notes" TEXT,
    CONSTRAINT "Appointment_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor" ("doctor_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Appointment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient" ("patient_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("appointment_id", "date", "doctor_id", "notes", "patient_id", "status", "time") SELECT "appointment_id", "date", "doctor_id", "notes", "patient_id", "status", "time" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
