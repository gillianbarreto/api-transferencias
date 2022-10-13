import { success, internalError } from '../../utils/output-message';
import { getAccountsType, getBanks } from '../../services/v1/general.service';

export const accountsTypeModule = async () => {
  try {
    const response = await getAccountsType();
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}

export const banksModule = async () => {
  try {
    const response = await getBanks();
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}