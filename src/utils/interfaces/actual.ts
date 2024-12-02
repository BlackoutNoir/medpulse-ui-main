export interface User {
  uid?: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  phone_no?: string;
  gender?: string;
  date_of_birth?: string; 
  user_type: string;
}