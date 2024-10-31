import { Doctor, Patient, Role, TreatmentService } from '@/utils/interfaces/interfaces';

export const mockRoles: Role[] = [
  { id: '1', name: 'Admin', description: 'Administrator with full access' },
  { id: '2', name: 'User', description: 'Regular user access' },
];

// Treatment Services
export const treatmentServices: TreatmentService[] = [
  { name: 'General Checkup', cost: 100, description: 'Routine checkup and consultation' },
  { name: 'Dental Cleaning', cost: 150, description: 'Professional dental cleaning service' },
  { name: 'Physical Therapy', cost: 200, description: 'Physical therapy sessions' },
];


// Mock Doctors
export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Ronald Richards',
    username: 'ronaldrichards',
    email: 'ronaldrichards@example.com',
    phoneNumber: '209-555-0104',
    gender: 'MALE',
    dateOfBirth: new Date('1980-05-10'),
    avatar: '/placeholder.svg?height=32&width=32',
    createdAt: new Date().toISOString(),
    lastLogin: new Date('2024-10-28T12:00:00Z').toISOString(),
    isActive: true,
    speciality: 'Dentist',
    workingDays: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
    assignedTreatmentServices: [treatmentServices[0], treatmentServices[1], treatmentServices[2]], // General Checkup, Dental Cleaning
    employmentType: 'FULL-TIME',
  },
  {
    id: '2',
    name: 'Dorothy Spencer',
    username: 'dorothyspencer',
    email: 'dorothyspencer@example.com',
    phoneNumber: '415-555-0198',
    gender: 'FEMALE',
    dateOfBirth: new Date('1985-09-15'),
    avatar: '/placeholder.svg?height=32&width=32',
    createdAt: new Date().toISOString(),
    lastLogin: new Date('2024-10-27T09:00:00Z').toISOString(),
    isActive: true,
    speciality: 'Cardiologist',
    workingDays: ['MONDAY', 'WEDNESDAY', 'FRIDAY'],
    //assignedTreatmentServices: [treatmentServices[0]], // General Checkup
    employmentType: 'PART-TIME',
  },
  //add more mock doctors as needed
];

//Mock Patients
export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Michael Johnson',
    username: 'michaeljohnson',
    email: 'michaeljohnson@example.com',
    phoneNumber: '213-555-0123',
    gender: 'MALE',
    dateOfBirth: new Date('1990-02-20'),
    avatar: '/placeholder.svg?height=32&width=32',
    createdAt: new Date().toISOString(),
    lastLogin: new Date('2024-10-26T08:00:00Z').toISOString(),
    isActive: true,
    address: '123 Maple Street, Springfield',
    medicalHistory: ['Allergy to penicillin', 'Asthma'],
  },
  {
    id: '2',
    name: 'Sarah Connor',
    username: 'sarahconnor',
    email: 'sarahconnor@example.com',
    phoneNumber: '650-555-0143',
    gender: 'FEMALE',
    dateOfBirth: new Date('1988-11-30'),
    avatar: '/placeholder.svg?height=32&width=32',
    createdAt: new Date().toISOString(),
    lastLogin: new Date('2024-10-27T10:00:00Z').toISOString(),
    isActive: true,
    address: '456 Elm Street, Metropolis',
    medicalHistory: ['No known allergies'],
  },
  // add more mock patients as needed
];
