// Check reference-ui-main
// import axios from 'axios'
// axios.defaults.withCredentials = true;
//import axios from "axios";

//const API_URL = process.env.NEXT_PUBLIC_API_URL
//const API_URL = "http://localhost:8000/api/v1";
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsInVzZXJfdWlkIjoiNGNhMmFkYTUtNDM1OC00YjhiLWE2NzMtNDViYmY5ZTZmMzI5IiwidXNlcl90eXBlIjoidXNlciJ9LCJleHAiOjE3MzI4MDgwNzAsImp0aSI6IjI0N2I4MjY4LWRiZDYtNDVkNi1iNWVmLTNiNjFlNmQyMDA5NyIsInJlZnJlc2giOmZhbHNlfQ.0hSMMqo1upVmCpy7ENTi6KMZ4jEWfFMbO1YbsSRwNZg"

import {
  Doctor,
  Patient,
  Appointment,
  User,
  TreatmentService,
} from '@/utils/interfaces/interfaces';
import {
  mockDoctors,
  mockPatients,
  mockAppointments,
  mockUsers,
  mockTreatmentServices,
} from '@/utils/mockData/mockdata';

import axios from 'axios';

class DataFetcher {

  // USED BY PATIENT SYSTEM
  private static baseURL = process.env.API_BASE_URL || 'http://localhost:3000';

  // Fetch users data by id
  static async fetchUserById(userId: string) {
    try {
      const response = await axios.get(`${this.baseURL}/api/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  // Fetch doctors data
  static async fetchDoctors() {
    try {
      const response = await axios.get(`${this.baseURL}/api/doctors`);
      return response.data;
    } catch (error) {
      console.error('Error fetching doctors:', error);
      throw error;
    }
  }

  // Fetch patients data
  static async fetchPatients() {
    try {
      const response = await axios.get(`${this.baseURL}/api/patients`);
      return response.data;
    } catch (error) {
      console.error('Error fetching patients:', error);
      throw error;
    }
  }
  static async fetchPatient() {
    try {
      const response = await axios.get(`${this.baseURL}/api/patients/user-2`);
      return response.data;
    } catch (error) {
      console.error('Error fetching patients:', error);
      throw error;
    }
  }
  static async fetchAppointments() {
    try {
      const response = await axios.get(`${this.baseURL}/api/appointments`);
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  }
  static async fetchLabResults() {
    try {
      const response = await axios.get(`${this.baseURL}/api/lab-tests/patient/user-2`);
      return response.data;
    } catch (error) {
      console.error('Error fetching labtest:', error);
      throw error;
    }
  }
  static async fetchPrescriptions() {
    try {
      const response = await axios.get(`${this.baseURL}/api/prescriptions/patient/user-2`);
      return response.data;
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
      throw error;
    }
  }

  
  // USED BY PATIENT SYSTEM


  
  // USED BY OTHER SYSTEM

  static async fetchUsersMock(): Promise<User[]> {
    try {
      const data = mockUsers;
      return data;
    } catch (error) {
      console.error('Error fetching mock doctors:', error);
      throw error;
    }
  }


  static async fetchDoctorsMock(): Promise<Doctor[]> {
    try {
      const data = mockDoctors;
      return data;
    } catch (error) {
      console.error('Error fetching mock doctors:', error);
      throw error;
    }
  }

  static async fetchPatientsMock(): Promise<Patient[]> {
    try {
      const data = mockPatients;
      return data;
    } catch (error) {
      console.error('Error fetching mock patients:', error);
      throw error;
    }
  }
  // ========================== USERS AND ROLES ==========================

  // ========================== TREATMENTS AND SERVICES ==========================

  static async fetchTreatmentServicesMock(): Promise<TreatmentService[]> {
    try {
      const data = mockTreatmentServices;
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching mock treatment services:', error);
      throw error;
    }
  }

  static async fetchAppointmentsMock(): Promise<Appointment[]> {
    try {
      const data = mockAppointments;
      return data;
    } catch (error) {
      console.error('Error fetching mock appointments:', error);
      throw error;
    }
  }

  // USED BY OTHER SYSTEM
}

export default DataFetcher;


