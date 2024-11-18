// Check reference-ui-main
// import axios from 'axios'
// axios.defaults.withCredentials = true;
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

export default class DataFetcher {
  // ========================== USERS AND ROLES ==========================
  static async fetchUsers(): Promise<User[]> {
    try {
      const data = mockUsers;
      return data;
    } catch (error) {
      console.error('Error fetching mock users:', error);
      throw error;
    }
  }

  // static async fetchStaffMembers(): Promise<Staff[]> {
  //   try {
  //     const data = mockStaffMembers;
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching mock staff members:', error);
  //     throw error;
  //   }
  // }

  static async fetchDoctors(): Promise<Doctor[]> {
    try {
      const data = mockDoctors;
      return data;
    } catch (error) {
      console.error('Error fetching mock doctors:', error);
      throw error;
    }
  }

  static async fetchPatients(): Promise<Patient[]> {
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

  static async fetchTreatmentServices(): Promise<TreatmentService[]> {
    try {
      const data = mockTreatmentServices;
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching mock treatment services:', error);
      throw error;
    }
  }

  static async fetchAppointments(): Promise<Appointment[]> {
    try {
      const data = mockAppointments;
      return data;
    } catch (error) {
      console.error('Error fetching mock appointments:', error);
      throw error;
    }
  }

  // ========================== TREATMENTS AND SERVICES ==========================
}

// ========================== DRAFT ROUTES ==========================
// static async fetchPatients(): Promise<Patient[]> {
//   try {
//     const data = mockPatients;
//     return data;
//   } catch (error) {
//     console.error('Error fetching patients:', error);
//     throw error;
//   }
// }

// static async fetchUsers(limit, page) {
// 	try {
// 		const response = await axios.get(
// 			`${process.env.NEXT_PUBLIC_API_URL}/admin/users`,
// 			{
// 				params: {
// 					limit: limit,
// 					page: page,
// 				},
// 			},
// 		)
// 		return response.data
// 	} catch (error) {
// 		console.error('Error fetching users:', error);
//     throw error;
// 	}
// }
