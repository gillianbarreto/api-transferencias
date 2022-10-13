export interface Transfer {
  id?: number;
  user_id: number;
  contact_id: number;
  message: string;
  amount: number;
  contact_rut: string;
  contact_name: string;
  bank_name: string;
  account_type_name: string;
  account_number: string;
}