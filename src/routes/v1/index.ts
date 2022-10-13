import express from 'express';
import LoginRoutes from './login.routes';
import GeneralRoutes from './general.routes';
import ContactsRoutes from './contacts.routes';
import TransfersRoutes from './transfers.routes';

const version = '/v1';
const v1Routes = express();

v1Routes.use(`${version}`, LoginRoutes);
v1Routes.use(`${version}`, GeneralRoutes);
v1Routes.use(`${version}`, ContactsRoutes);
v1Routes.use(`${version}`, TransfersRoutes);

export default v1Routes;