// Check reference-ui-main
// import axios from 'axios'
// axios.defaults.withCredentials = true;
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1"; 

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsInVzZXJfdWlkIjoiNGNhMmFkYTUtNDM1OC00YjhiLWE2NzMtNDViYmY5ZTZmMzI5IiwidXNlcl90eXBlIjoidXNlciJ9LCJleHAiOjE3MzI4MjM2NTUsImp0aSI6IjE1MGY3N2YyLWI5ODktNGQyNy05MzU5LWUzZDA3OTFjZjZiMSIsInJlZnJlc2giOmZhbHNlfQ.9n_6ny_BY_YN8xdSVNnlnmeaXSb5VIKJCDTbeJCzOW0"

import {
  Doctor,
  Patient,
  Appointment,
  User,
  Staff
} from '@/utils/interfaces/backend_interfaces';

import {
  mockDoctors,
  mockPatients,
  mockAppointments,
  mockUsers,
  mockTreatmentServices,
} from '@/utils/mockData/mockdata';

export default class DataFetcher {
  static async fetchUsers() : Promise<User[]>  {
    try {
      const response = await axios.get<User[]>(`${API_URL}/users/`,
        {headers: {Authorization: `Bearer ${token}`},},
      )
      return response.data;
    } catch (error: any) {

        throw error;
    }
  }

  static async fetchUser(uid : string) : Promise<User>  {
    try {
      const response = await axios.get<User>(`${API_URL}/users/${uid}`,
        {headers: {Authorization: `Bearer ${token}`},},
      )
      return response.data; 
    } catch (error: any) {
      throw error;
    }
  }


  static async fetchDoctors() : Promise<Doctor[]>  {
    try {
      const response = await axios.get<Doctor[]>(`${API_URL}/doctors/`,
        {headers: {Authorization: `Bearer ${token}`},},
      )
      return response.data;
    } catch (error: any) {

        throw error;
    }
  }

  static async fetchDoctor(uid : string) : Promise<Doctor>  {
    try {
      const response = await axios.get<Doctor>(`${API_URL}/doctors/${uid}`,
        {headers: {Authorization: `Bearer ${token}`},},
      )
      return response.data; 
    } catch (error: any) {
      throw error;
    }
  }

  static async fetchPatients() : Promise<Patient[]>  {
    try {
      const response = await axios.get<Patient[]>(`${API_URL}/patients/`,
        {headers: {Authorization: `Bearer ${token}`},},
      )
      return response.data;
    } catch (error: any) {

        throw error;
    }
  }

  static async fetchPatient(uid : string) : Promise<Patient>  {
    try {
      const response = await axios.get<Patient>(`${API_URL}/patients/${uid}`,
        {headers: {Authorization: `Bearer ${token}`},},
      )
      return response.data; 
    } catch (error: any) {
      throw error;
    }
  }

  static async fetchStaffs() : Promise<Staff[]>  {
    try {
      const response = await axios.get<Staff[]>(`${API_URL}/staffs/`,
        {headers: {Authorization: `Bearer ${token}`},},
      )
      return response.data;
    } catch (error: any) {

        throw error;
    }
  }

  static async fetchStaff(uid : string) : Promise<Staff>  {
    try {
      const response = await axios.get<Staff>(`${API_URL}/staffs/${uid}`,
        {headers: {Authorization: `Bearer ${token}`},},
      )
      return response.data; 
    } catch (error: any) {
      throw error;
    }
  }


  static async fetchAppointments() : Promise<Appointment[]>  {
    try {
      const response = await axios.get<Appointment[]>(`${API_URL}/appointments/`,
        {headers: {Authorization: `Bearer ${token}`},},
      )
      return response.data;
    } catch (error: any) {

        throw error;
    }
  }

  static async fetchAppointment(uid : string) : Promise<Appointment>  {
    try {
      const response = await axios.get<Appointment>(`${API_URL}/appointments/${uid}`,
        {headers: {Authorization: `Bearer ${token}`},}
      )
      return response.data; 
    } catch (error: any) {
      throw error;
    }
  }

} 