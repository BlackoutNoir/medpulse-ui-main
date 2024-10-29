//Check reference-ui-main
//import axios from 'axios'
import { Doctor, Patient } from "@/utils/interfaces/interfaces";
import { mockDoctors, mockPatients } from "@/utils/mockData/mockdata";
//axios.defaults.withCredentials = true;

export default class DataFetcher {
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
}

