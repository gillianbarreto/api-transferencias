import { success, conflict, internalError } from '../../utils/output-message';
import { addTransfer, getTransfers } from '../../services/v1/transfers.service';
import { Transfer } from '../../../interfaces/transfer.interface';

export const addTransferModule = async (data: Transfer) => {
  try {
    const response = await addTransfer(data);
    if (!response) return conflict(null);
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}

export const getTransfersModule = async (user_id: number) => {
  try {
    const response = await getTransfers(user_id);
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}
