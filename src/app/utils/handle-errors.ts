import { Request, Response, NextFunction } from 'express';

export const exceptionError = (req: Request, res: Response, next: NextFunction ) => {
  res.status(404).json({ code: 404, message: 'Not found' });
  next();
};
