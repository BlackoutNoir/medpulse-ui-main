import { Doctor, Patient } from '@/utils/interfaces/interfaces';

// Mock Doctors
export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Ronald Richards',
    speciality: 'Dentist',
    email: 'ronaldrichards@example.com',
    phoneNumber: '209-555-0104',
    workingDays: ['S', 'M', 'T', 'W', 'T', 'F'],
    assignedTreatment: 'Dental service',
    employmentType: 'PART-TIME',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '2',
    name: 'Dorothy Spencer',
    speciality: 'Cardiologist',
    email: 'dorothyspencer@example.com',
    phoneNumber: '415-555-0198',
    workingDays: ['M', 'T', 'W', 'T', 'F'],
    assignedTreatment: 'Cardiac care',
    employmentType: 'FULL-TIME',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '3',
    name: 'Michael Jordan',
    speciality: 'Pediatrician',
    email: 'michaeljordan@example.com',
    phoneNumber: '213-555-0123',
    workingDays: ['M', 'T', 'W', 'F'],
    assignedTreatment: 'Child health',
    employmentType: 'PART-TIME',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    speciality: 'Dermatologist',
    email: 'sarahjohnson@example.com',
    phoneNumber: '650-555-0143',
    workingDays: ['T', 'W', 'T', 'F', 'S'],
    assignedTreatment: 'Skin care',
    employmentType: 'FULL-TIME',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  //add more mock doctors as needed
];

//Mock Patients
export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '000000000000',
    gender: 'MALE',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phoneNumber: '000000000000',
    gender: 'FEMALE',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  // add more mock patients as needed
];
