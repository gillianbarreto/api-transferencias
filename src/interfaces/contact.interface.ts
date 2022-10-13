export interface Contact {
  user_id: number;
  fullname: string;
  alias: string;
  rut: string;
  email: string;
  phone: string;
  bank_id: string;
  bank_name: string;
  account_type_id: number;
  account_number: string;
  status: boolean;
  created_at: Date;
}