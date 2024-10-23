export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export enum Status {
  Pending = "Pending",
  Confirmed = "Confirmed",
  Cancelled = "Cancelled",
}

export interface Patient {
  id: string; //added
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  // address: string;
  // occupation: string;
  // emergencyContactName: string;
  // emergencyContactNumber: string;
  // primaryPhysician: string;
  // insuranceProvider: string;
  // insurancePolicyNumber: string;
  // allergies: string | undefined;
  // currentMedication: string | undefined;
  // familyMedicalHistory: string | undefined;
  // pastMedicalHistory: string | undefined;
  // identificationType: string | undefined;
  // identificationNumber: string | undefined;
  // identificationDocument: FormData | undefined;
  // privacyConsent: boolean;
}

export interface Appointment {
  id: string; //added 
  patient: Patient;
  schedule: string; //change to Date later
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
