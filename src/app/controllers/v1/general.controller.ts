import { Request, Response } from 'express';
import { accountsTypeModule, banksModule } from '../../modules/v1/general.module'

export const accountsTypeController = async (req: Request, res: Response) => {
  const response = await accountsTypeModule();
  return res.status(response.code).send(response);
};

export const banksController = async (req: Request, res: Response) => {
  const response = await banksModule();
  return res.status(response.code).send(response);
};