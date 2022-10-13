export const DEFAULT_RESPONSE = {
  SUCCESS: { code: 200,  message: 'Success' },
  NOT_FOUND: { code: 404, message: 'Not Found' },
  CONFLICT: { code: 409, message: 'Error al actualizar' },
  ERROR: { code: 500,  message: 'Internal Error' }
};

export const outputMessage = (code: number, message: string, payload: any) => ({
  code,
  message,
  payload
});

export const success = (payload: any, message = DEFAULT_RESPONSE.SUCCESS.message) => {
  return outputMessage(DEFAULT_RESPONSE.SUCCESS.code, message, payload);
}

export const notFound = (payload = null, message = DEFAULT_RESPONSE.NOT_FOUND.message) => {
  return outputMessage(DEFAULT_RESPONSE.NOT_FOUND.code, message, payload);
}

export const conflict = (payload: any, message = DEFAULT_RESPONSE.CONFLICT.message) => {
  return outputMessage(DEFAULT_RESPONSE.CONFLICT.code, message, payload);
}

export const internalError = (error: any) => {
  return outputMessage(DEFAULT_RESPONSE.ERROR.code, DEFAULT_RESPONSE.ERROR.message, error);
}
