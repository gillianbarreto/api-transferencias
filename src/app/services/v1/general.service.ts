import axios from 'axios';
import { getAccountsTypeAll } from '../../../models/accounts-type.model';

export const getAccountsType = async () => {
  const response = await getAccountsTypeAll();
  return response;
}

export const getBanks = async () => {
  try {
    const response = await axios.get("https://bast.dev/api/banks.php");
    return response.data;
  } catch (error) {
    throw new Error();
  }
}
