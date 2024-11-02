//NOTE: Maybe modify to use Zod schema

// Type (Union) Interfaces
type employmentType = 'FULL-TIME' | 'PART-TIME';
type genderType = 'MALE' | 'FEMALE';

// User Interface

// Doctor Interface
export interface Doctor {
  id: string;
  name: string;
  avatar: string;
  speciality: string;
  email: string;
  phoneNumber: string;
  workingDays: string[];
  assignedTreatment: string; //change to list later
  employmentType: employmentType;
}

// Patient Interface
export interface Patient {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  gender: genderType;
  //dateOfBirth: Date;
  avatar: string;
  //assignedDoctor: Doctor;
}