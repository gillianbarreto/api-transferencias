import express from 'express';
import cors from 'cors';
import appRoutes from '../routes';
import { exceptionError } from '../app/utils/handle-errors';

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const api = express();
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cors());
api.use(appRoutes);
api.use(exceptionError);

export default api;