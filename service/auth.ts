import Credential from '../types/Credential';
import User from '../types/User';

import request from './request';

const api = request();

async function getCredentials(code: string): Promise<Response> {
  try {
    const response = await api.get('/callback', {
      params: { code },
    });

    if (!response.data) {
      throw new Error('request returns with empty data');
    }

    return response.data;
  } catch (error) {
    return error.message;
  }
}

async function getMe(): Promise<User | Error> {
  try {
    const response = await api.get('/me');
    if (!response.data) {
      throw new Error('Could not fetch me information');
    }
    return response.data;
  } catch (error) {
    return {
      error: error.message,
    };
  }
}

export default { getCredentials, getMe };
