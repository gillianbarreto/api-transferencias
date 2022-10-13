import { param, body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { outputMessage } from '../utils/output-message';
import { NODE_ENV } from '../../environment/environment';

export const validateLoginRequest = () => {
  return [
    body('rut')
      .isString()
      .isLength({ min: 8, max:10 })
      .notEmpty(),
    body('password')
      .isString()
      .isLength({ min: 8, max:20 })
      .notEmpty()
  ];
}

export const validateAddContactRequest = () => {
  return [
    body('user_id')
      .isNumeric()
      .notEmpty(),
    body('rut')
      .isString()
      .isLength({ min: 8, max:10 })
      .notEmpty(),
    body('fullname')
      .isString()
      .notEmpty()
      .isLength({ min: 5, max:50 }),
    body('alias')
      .isString()
      .isLength({ min: 5, max:50 }),
    body('email')
      .notEmpty()
      .isEmail(),
    body('phone')
      .isString()
      .isLength({ min: 9, max:12 }),
    body('bank_id')
      .isString()
      .notEmpty(),
    body('bank_name')
      .isString()
      .notEmpty(),
    body('account_type_id')
      .isNumeric()
      .notEmpty(),
    body('account_number')
      .isString()
      .notEmpty()
      .isLength({ min: 9, max:15 })
  ];
}

export const validateGetContactsRequest = () => {
  return [
    param('user_id')
      .isNumeric()
      .notEmpty()
  ];
}

export const validateAddTransferRequest = () => {
  return [
    body('user_id')
      .isNumeric()
      .notEmpty(),
    body('contact_id')
      .isNumeric()
      .notEmpty(),
    body('message')
      .isString()
      .isLength({ max:50 }),
    body('amount')
      .isNumeric()
      .notEmpty()
      .isFloat({min: 1})
  ];
}

export const validateGetTransfersRequest = () => {
  return [
    param('user_id')
      .isNumeric()
      .notEmpty()
  ];
}

export const validate = (req: Request, res: Response, next: NextFunction) => {

  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const extractedErrors: any = [];
  if (NODE_ENV === "DESA") errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  const response = outputMessage(400, 'Bad request', extractedErrors);
  return res.status(400).json(response);
};
