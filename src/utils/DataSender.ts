// Check reference-ui-main
import axios from 'axios';
// axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:8000/api/v1';

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
      const response = await axios.post<User>(`${API_URL}/users/`, user, {});
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  static async deleteUser(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/users/${uid}`,{});
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }

  static async createPatient(patient: Patient): Promise<Patient> {
    try {
      const response = await axios.post<Patient>(`${API_URL}/patient/`, patient, {});
      return response.data;
    } catch (error) {
      console.error('Error creating patient:', error);
      throw error;
    }
  }

  static async deletePatient(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/patients/${uid}`,{});
      return true;
    } catch (error) {
      console.error('Error deleting patient:', error);
      throw error;
    }
  }

  static async createStaff(staff: Staff): Promise<Staff> {
    try {
      const response = await axios.post<Staff>(`${API_URL}/staffs/`, staff, {});
      return response.data;
    } catch (error) {
      console.error('Error creating staff:', error);
      throw error;
    }
  }

  static async deleteStaff(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/staffs/${uid}`,{});
      return true;
    } catch (error) {
      console.error('Error deleting staff:', error);
      throw error;
    }
  }

  static async createDoctor(doctor: Doctor): Promise<Doctor> {
    try {
      const response = await axios.post<Doctor>(`${API_URL}/doctors/`, doctor , {});
      return response.data;
    } catch (error) {
      console.error('Error creating doctor:', error);
      throw error;
    }
  }

  static async deleteDoctor(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/doctors/${uid}`,{});
      return true;
    } catch (error) {
      console.error('Error deleting doctor:', error);
      throw error;
    }
  }

  static async createAppointment(appointment: Appointment): Promise<Appointment> {
    try {
      const response = await axios.post<Appointment>(`${API_URL}/appointments/`, appointment , {});
      return response.data;
    } catch (error) {
      console.error('Error creating doctor:', error);
      throw error;
    }
  }

  static async deleteAppointment(uid: String): Promise<boolean> {
    try {
      const response = await axios.delete(`${API_URL}/appointments/${uid}`,{});
      return true;
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw error;
    }
  }

  
  
  

}