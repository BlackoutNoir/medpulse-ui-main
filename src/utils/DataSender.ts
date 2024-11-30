// Check reference-ui-main
import axios from 'axios';
// axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:8000/api/v1';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsInVzZXJfdWlkIjoiNGNhMmFkYTUtNDM1OC00YjhiLWE2NzMtNDViYmY5ZTZmMzI5IiwidXNlcl90eXBlIjoidXNlciJ9LCJleHAiOjE3MzI4MzU2OTIsImp0aSI6IjFmOTYwMWIwLWVjOGMtNGRkZi1iZWM1LTBlMTk5M2U3NjdiZSIsInJlZnJlc2giOmZhbHNlfQ.hn9yJRpIwxolvlHogAKt49DWAFjmf2I-0Y_LFyGssgo"

import {
  Doctor,
  Patient,
  Appointment,
  User,  
  Staff
} from '@/utils/interfaces/backend_interfaces';

export default class DataSender {
  // ========================== CALLING ACTUAL API  ==========================
  static async createUser(user: User): Promise<User> {
    try {
      user.user_type="user"
      if (user.date_of_birth) {
        user.date_of_birth = new Date(user.date_of_birth!).toISOString().split("T")[0];
      }
      
      const response = await axios.post<User>(`${API_URL}/users/`, user, {
        headers: {Authorization: `Bearer ${token}`},
      });
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  static async deleteUser(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/users/${uid}`,{
        headers: {Authorization: `Bearer ${token}`},
      });
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }

  static async createPatient(patient: Patient): Promise<Patient> {
    try {
      const response = await axios.post<Patient>(`${API_URL}/patient/`, patient, {
        headers: {Authorization: `Bearer ${token}`},
      });
      return response.data;
    } catch (error) {
      console.error('Error creating patient:', error);
      throw error;
    }
  }

  static async deletePatient(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/patients/${uid}`,{
        headers: {Authorization: `Bearer ${token}`},
      });
      return true;
    } catch (error) {
      console.error('Error deleting patient:', error);
      throw error;
    }
  }

  static async createStaff(staff: Staff): Promise<Staff> {
    try {
      const response = await axios.post<Staff>(`${API_URL}/staffs/`, staff, {
        headers: {Authorization: `Bearer ${token}`},
      });
      return response.data;
    } catch (error) {
      console.error('Error creating staff:', error);
      throw error;
    }
  }

  static async deleteStaff(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/staffs/${uid}`,{
        headers: {Authorization: `Bearer ${token}`},
      });
      return true;
    } catch (error) {
      console.error('Error deleting staff:', error);
      throw error;
    }
  }

  static async createDoctor(doctor: Doctor): Promise<Doctor> {
    try {
      const response = await axios.post<Doctor>(`${API_URL}/doctors/`, doctor , {
        headers: {Authorization: `Bearer ${token}`},
      });
      return response.data;
    } catch (error) {
      console.error('Error creating doctor:', error);
      throw error;
    }
  }

  static async deleteDoctor(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/doctors/${uid}`,{
        headers: {Authorization: `Bearer ${token}`},
      });
      return true;
    } catch (error) {
      console.error('Error deleting doctor:', error);
      throw error;
    }
  }

  static async createAppointment(appointment: Appointment): Promise<Appointment> {
    try {
      const response = await axios.post<Appointment>(`${API_URL}/appointments/`, appointment , {
        headers: {Authorization: `Bearer ${token}`},
      });
      return response.data;
    } catch (error) {
      console.error('Error creating doctor:', error);
      throw error;
    }
  }

  static async deleteAppointment(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/appointments/${uid}`,{
        headers: {Authorization: `Bearer ${token}`},
      });
      return true;
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw error;
    }
  }

  
  
  

}