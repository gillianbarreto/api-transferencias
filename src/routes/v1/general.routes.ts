import { Router } from 'express';
import { accountsTypeController, banksController } from '../../app/controllers/v1/general.controller';

const GeneralRoutes = Router();

GeneralRoutes.get('/accounts-type', accountsTypeController);
GeneralRoutes.get('/banks', banksController);

export default GeneralRoutes;