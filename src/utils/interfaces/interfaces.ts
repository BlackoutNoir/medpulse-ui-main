//NOTE: Maybe modify to use Zod schema

// ========================== TYPE (UNION) INTERFACES ==========================
type EmploymentType = 'FULL-TIME' | 'PART-TIME';
type Gender = 'MALE' | 'FEMALE';
type AppointmentStatus = 'PENDING' | 'SCHEDULED' | 'CANCELLED' | 'COMPLETED';
export type WorkingDays = 'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';
// ========================== TYPE (UNION) INTERFACES ==========================

// ========================== ROLES AND SERVICES ==========================
export interface Role {
  id: string;
  name: string;
  description: string;
}
export interface TreatmentService {
  name: string;
  cost: number;
  description: string;
}
// ========================== ROLES AND SERVICES ==========================


// ========================== USERS ==========================
// User Interface
export interface User {
  id: string;
  name: string;
  username?: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
  dateOfBirth: Date; 
  avatar?: string;
  createdAt: string; //Store as ISO 8601 string (e.g., "2024-11-01T09:00:00Z")
  lastLogin?: string;
  isActive: boolean;
}

// Doctor Interface
export interface Doctor extends User {
  speciality: string;
  workingDays?: WorkingDays[];
  assignedTreatmentServices?: TreatmentService[]; 
  employmentType: EmploymentType;
}

// Patient Interface
export interface Patient extends User {
  address: string;
  lastVisitDate: string;
  medicalHistory?: string[];
}
// ========================== USERS ==========================


// ========================== APPOINTMENTS ==========================
export interface Appointment {
  id: string;
  patient: Patient;
  doctor: Doctor;
  scheduledAt: string; // Store as ISO 8601 string (e.g., "2024-11-01T09:00:00Z")
  status: AppointmentStatus;
}
// ========================== APPOINTMENTS ==========================