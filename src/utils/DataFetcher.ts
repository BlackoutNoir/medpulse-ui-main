import axios from 'axios';

class DataFetcher {
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
}

export default DataFetcher;
