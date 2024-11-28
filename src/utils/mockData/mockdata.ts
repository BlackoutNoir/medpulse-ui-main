import { Doctor, Patient, Role, Appointment, TreatmentService } from '@/utils/interfaces/interfaces';

export const mockRoles: Role[] = [
  { id: '1', name: 'Admin', description: 'Administrator with full access' },
  { id: '2', name: 'User', description: 'Regular user access' },
];

export const mockTreatmentServices: TreatmentService[] = [
  {
    id: "T1",
    name: 'General Checkup',
    description: 'Routine checkup and consultation',
    price: 50.0,
    duration: 60,
  },
  {
    id: "T2",
    name: 'Dental Cleaning',
    description: 'Professional dental cleaning service',
    price: 75.0,
    duration: 90,
  },
  {
    id: "T3",
    name: 'Physical Therapy',
    description: 'Physical therapy sessions',
    price: 100.0,
    duration: 120,
  },
];

export const mockDoctors: Doctor[] = [
  {
    id: 'D1',
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
    assignedTreatmentServices: [mockTreatmentServices[0], mockTreatmentServices[1]],
    employmentType: 'FULL-TIME',
  },
  {
    id: 'D2',
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
    assignedTreatmentServices: [mockTreatmentServices[0], mockTreatmentServices[2]],
    employmentType: 'PART-TIME',
  },
];

export const mockPatients: Patient[] = [
  {
    id: 'P1',
    name: 'Michael Johnson',
    username: 'michaeljohnson',
    email: 'michaeljohnson@example.com',
    phoneNumber: '213-555-0123',
    gender: 'MALE',
    dateOfBirth: new Date('1990-02-20'),
    avatar: '/placeholder.svg?height=32&width=32',
    createdAt: new Date().toISOString(),
    lastLogin: new Date('2024-12-26T08:00:00Z').toISOString(),
    lastVisitDate: new Date('2024-12-26T08:00:00Z').toISOString(),
    isActive: true,
    address: '123 Maple Street, Springfield',
    medicalHistory: ['Allergy to penicillin', 'Asthma'],
  },
  {
    id: 'P2',
    name: 'Sarah Connor',
    username: 'sarahconnor',
    email: 'sarahconnor@example.com',
    phoneNumber: '650-555-0143',
    gender: 'FEMALE',
    dateOfBirth: new Date('1988-11-30'),
    avatar: '/placeholder.svg?height=32&width=32',
    createdAt: new Date().toISOString(),
    lastLogin: new Date('2024-12-27T10:00:00Z').toISOString(),
    lastVisitDate: new Date('2024-12-27T10:00:00Z').toISOString(),
    isActive: true,
    address: '456 Elm Street, Metropolis',
    medicalHistory: ['No known allergies'],
  },
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patient: mockPatients[0],
    doctor: mockDoctors[0],
    treatmentService: mockTreatmentServices[0],
    scheduledAt: '2024-11-01T09:00:00Z',
    status: 'SCHEDULED',
  },
  {
    id: '2',
    patient: mockPatients[1],
    doctor: mockDoctors[1],
    treatmentService: mockTreatmentServices[2],
    scheduledAt: '2024-11-15T14:30:00Z',
    status: 'COMPLETED',
  },
];

export const mockUsers = [...mockDoctors, ...mockPatients];

