// Check reference-ui-main
// import axios from 'axios';
// axios.defaults.withCredentials = true;

// export default class DataSender {
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
// }
