import { success, conflict, internalError } from '../../utils/output-message';
import { addContact, getContacts } from '../../services/v1/contacts.service';
import { Contact } from '../../../interfaces/contact.interface';

export const addContactModule = async (data: Contact) => {
  try {
    const response = await addContact(data);
    if (!response) return conflict(null);
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}

export const getContactsModule = async (user_id: number) => {
  try {
    const response = await getContacts(user_id);
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}

