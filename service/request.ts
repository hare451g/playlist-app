import axios, { AxiosInstance } from 'axios';
import cookie from 'js-cookie';

function request(): AxiosInstance {
  const accessToken = cookie.get('access_token');
  if (!accessToken) {
    return axios;
  }

  const apiInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      authorization: `Bearer ${accessToken}`,
      accept: 'application/json',
    },
  });

  return apiInstance;
}

export default request;
