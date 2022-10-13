import { Request, Response, NextFunction } from 'express';
import { outputMessage } from '../utils/output-message';
import { EncryptUtil } from '../utils/encrypt.util';
import { SECRET_KEY } from '../../environment/environment';

export const decryptBody = (req: Request, res: Response, next: NextFunction) => {

  const decrypted = EncryptUtil.decryptObject(req.body?.data, SECRET_KEY.RESQUEST);

  if (decrypted) {
    req.body = decrypted;

    return next();
  }

  const response = outputMessage(400, 'Bad request', 'Error al extraer datos');
  return res.status(400).json(response);
};