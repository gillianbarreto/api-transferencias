import { success, internalError } from '../../utils/output-message';
import { loginService } from '../../services/v1/login.service';

export const loginModule = async (data: any) => {  // TODO: cambiar el tipo
  try {
    const response = await loginService(data);
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}
