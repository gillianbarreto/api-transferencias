import express from 'express';
import { BASE } from '../environment/environment';
import { healthcheckController } from '../app/controllers/healthcheck.controller';
import v1Routes from './v1';

const appRoutes = express();

appRoutes.get(`${BASE}/healthcheck`, healthcheckController);
appRoutes.use(`${BASE}`, v1Routes);

export default appRoutes;