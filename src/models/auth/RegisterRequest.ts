export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  dob?: Date;
  gender?: string;
  address?: string;
  country?: string;
}
