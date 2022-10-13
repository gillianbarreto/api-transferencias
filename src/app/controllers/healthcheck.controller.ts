import { Request, Response } from 'express';

export const healthcheckController = (req: Request, res: Response) => {
  return res.status(200).send({ code: 'OK' });
};