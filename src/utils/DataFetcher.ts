import axios from 'axios';

class DataFetcher {
  private static baseURL = process.env.API_BASE_URL || 'http://localhost:3000';

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
}

export default DataFetcher;
