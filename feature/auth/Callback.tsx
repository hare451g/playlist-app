import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Credential from '../../types/Credential';
import parseCredentials from './parseCredential';
import saveCredentials from './saveCredentials';

function Callback() {
  const router = useRouter();

  useEffect(() => {
    try {
      const hash = window.location.hash;
      const { credential, error } = parseCredentials(hash);

      if (error) {
        throw new Error(error);
      }

      const saved = saveCredentials(credential);

      if (saved.error) {
        throw new Error(error);
      }

      router.push('/');
    } catch (error) {
      router.push(`/login?error=${error.message}`);
    }
  }, []);

  return (
    <div>
      <p>Redicecting you . . .</p>
    </div>
  );
}

export default Callback;
