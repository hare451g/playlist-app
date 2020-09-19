import cookie from 'js-cookie';

// types
import Credential from '../../types/Credential';

function saveCredential(credential: Credential) {
  try {
    const { access_token, expires_in, token_type } = credential;

    if (!credential.access_token) {
      throw new Error('Malformed credential');
    }

    const token = `${token_type} ${access_token}`;
    cookie.set('access_token', token);
    cookie.set('expires_in', `${expires_in}`);

    return {
      data: credential,
    };
  } catch (error) {
    return { error: error.message };
  }
}

export default saveCredential;
