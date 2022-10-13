import { Contact } from '../../../interfaces/contact.interface';
import { getContactsByUserAll, addContactByUser } from '../../../models/contacts.model';

export const addContact = async (data: Contact) => {
  try {
    await addContactByUser(data);
    return true;
  } catch (error) {
    return false
  }
}

export const getContacts = async (user_id: number) => {
  const response = await getContactsByUserAll(user_id);
  return response;
}
