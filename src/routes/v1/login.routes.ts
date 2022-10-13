import { Router } from 'express';
import { validateLoginRequest, validate } from '../../app/middlewares/request.validator';
import { loginController } from '../../app/controllers/v1/login.controller';
import { decryptBody } from '../../app/middlewares/descrypt-data';

const LoginRoutes = Router();

LoginRoutes.post('/login', decryptBody, validateLoginRequest(), validate, loginController);

export default LoginRoutes;