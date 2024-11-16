// Check reference-ui-main
//import axios from 'axios';
// axios.defaults.withCredentials = true;

export default class DataSender {
  // Appointments
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async requestAppointment(appointmentData: any): Promise<any> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointment/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      return response;
    } catch (error) {
      console.error('Error requesting appointment:', error);
      throw error;
    }
  }


  // Users
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async createUser(user: any): Promise<any> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      return response;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async promoteToPatient(patientData: any): Promise<any> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/promote-to-patient`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });
      return response;
    } catch (error) {
      console.error('Error promoting user to patient:', error);
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async promoteToStaff(staffData: any): Promise<any> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/promote-to-staff`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(staffData),
      });
      return response;
    } catch (error) {
      console.error('Error promoting user to staff:', error);
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async promoteToDoctor(doctorData: any): Promise<any> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/promote-to-doctor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorData),
      });
      return response;
    } catch (error) {
      console.error('Error promoting staff member to doctor:', error);
      throw error;
    }
  }
}



//   static async registerUser(user): Promise<any> {
//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, user);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   }

//   static async loginUser(username, password): Promise<any> {
//     try {
//       const response = axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
//         new URLSearchParams({
//           username: username,
//           password: password,
//         }),
//       );
//       return response;
//     } catch (error) {
//       console.error('Error logging in:', error);
//       throw error;
//     }
//   }

//   static async logout(): Promise<any> {
//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`);
//       return response.data;
//     } catch (error) {
//       console.error('Error logging out:', error);
//       throw error;
//     }
//   }

//   static async validatePassword(userId, currentPassword) {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/auth/validate-password`,
//         {
//           current_password: currentPassword,
//         },
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Error validating password:', error);
//       throw error;
//     }
//   }
