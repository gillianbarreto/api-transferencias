import { Request, Response } from 'express';
import { addTransferModule, getTransfersModule } from '../../modules/v1/transfers.module';

export const addTransferController = async (req: Request, res: Response) => {
  const response = await addTransferModule(req.body);
  return res.status(response.code).send(response);
}

export const getTransfersController = async (req: Request, res: Response) => {
  const response = await getTransfersModule(parseInt(req.params.user_id));
  return res.status(response.code).send(response);
}
