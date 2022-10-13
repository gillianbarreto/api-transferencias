import { Router } from 'express';
import { validateAddContactRequest, validateGetContactsRequest, validate } from '../../app/middlewares/request.validator';
import { addContactController, getContactsController } from '../../app/controllers/v1/contacts.controller';
import { decryptBody } from '../../app/middlewares/descrypt-data';

const ContactsRoutes = Router();

ContactsRoutes.post('/contact', decryptBody, validateAddContactRequest(), validate, addContactController);
ContactsRoutes.get('/contacts/:user_id', validateGetContactsRequest(), validate, getContactsController);

export default ContactsRoutes;