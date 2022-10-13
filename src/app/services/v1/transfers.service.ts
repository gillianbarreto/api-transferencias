import { Transfer } from "../../../interfaces/transfer.interface";
import { addTransferByUser, getTransfersByUserAll } from "../../../models/transfers.model";

export const addTransfer = async (data: Transfer) => {
  try {
    const response = await addTransferByUser(data);

    return {
      id: response.getDataValue('id'),
      created_at: response.getDataValue('created_at')
    };
  } catch (error) {
    return false
  }
}

export const getTransfers = async (user_id: number) => {
  const response = await getTransfersByUserAll(user_id);
  return response;
}
