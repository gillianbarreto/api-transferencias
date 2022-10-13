import { Request, Response } from 'express';
import { loginModule } from '../../modules/v1/login.module'

export const loginController = async (req: Request, res: Response) => {
  const response = await loginModule(req.body);
  return res.status(response.code).send(response);
};
