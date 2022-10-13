import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const BASE = process.env.BASE || '/api';
export const NODE_ENV = process.env.NODE_ENV || 'DESA';

export const DB = {
  HOST: process.env.DATABASE_HOST || '',
  PORT: parseInt(process.env.DATABASE_PORT || '3306'),
  NAME: process.env.DATABASE_NAME || '',
  USER: process.env.DATABASE_USER || '',
  PASSWORD: process.env.DATABASE_PASS || '',
  DIALECT: process.env.DATABASE_DIALECT
}

export const SECRET_KEY = {
  RESQUEST: process.env.SECRET_KEY_REQUEST || ''
}
