import Credential from '../../types/Credential';

type ReturnValue = {
  credential?: Credential;
  error?: string | null;
};

function parseCredentials(hash: string): ReturnValue {
  try {
    if (!hash) {
      throw new Error('Hash is empty');
    }
    const credential: Credential = hash
      // remove hash
      .substring(1)
      // split with &
      .split('&')
      // map thru and split with =
      .map((word) => word.split('='))
      // reduce to credential object
      .reduce(
        (accumulated, current) => ({
          ...accumulated,
          [current[0]]: current[1],
        }),
        { access_token: null, token_type: null, expires_in: null }
      );

    if (credential.access_token === null) {
      throw new Error('malformed hash');
    }
    return { credential };
  } catch (error) {
    return {
      error: error.message,
    };
  }
}

export default parseCredentials;
