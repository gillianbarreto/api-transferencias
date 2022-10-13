import { Request, Response } from 'express';
import { addContactModule, getContactsModule } from '../../modules/v1/contacts.module';

export const addContactController = async (req: Request, res: Response) => {
  const response = await addContactModule(req.body);
  return res.status(response.code).send(response);
}

export const getContactsController = async (req: Request, res: Response) => {
  const response = await getContactsModule(parseInt(req.params.user_id));
  return res.status(response.code).send(response);
}
