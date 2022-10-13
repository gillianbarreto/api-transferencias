import * as CryptoJS from 'crypto-js';

export class EncryptUtil {

  static encryptObject(body: any, key: string) {
    return CryptoJS.AES.encrypt(JSON.stringify(body), key).toString();
  }

  static decryptObject(body: any, key: string) {
    try {
      const decrypt = CryptoJS.AES.decrypt(body, key);
      return JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.error('*** Error en decrypt *****', error);
      return null
    }
  }

  static decryptErrorMessage() {
    return 'Body de la peticion se ha desencriptado incorrectamente';
  }
}