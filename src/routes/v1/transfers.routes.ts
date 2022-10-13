import { Router } from 'express';
import { validateAddTransferRequest, validateGetTransfersRequest, validate } from '../../app/middlewares/request.validator';
import { addTransferController, getTransfersController } from '../../app/controllers/v1/transfers.controller';
import { decryptBody } from '../../app/middlewares/descrypt-data';

const TransfersRoutes = Router();

TransfersRoutes.post('/transfer', decryptBody, validateAddTransferRequest(), validate, addTransferController);
TransfersRoutes.get('/transfers/:user_id', validateGetTransfersRequest(), validate, getTransfersController);

export default TransfersRoutes;