import axios, { AxiosInstance, AxiosResponse } from 'axios';
import router from 'next/router';
import cookie from 'js-cookie';

const SPOTIFY_API_URL = 'https://api.spotify.com/v1';

function request(): AxiosInstance {
  const accessToken = cookie.get('access_token');
  if (!accessToken) {
    return axios;
  }

  const apiInstance = axios.create({
    baseURL: SPOTIFY_API_URL,
    headers: {
      Authorization: accessToken,
      accept: 'application/json',
    },
  });

  apiInstance.interceptors.response.use(
    // on fullfilled
    (response) => response,
    // on rejected
    (reason) => {
      const response: AxiosResponse = reason.response;

      if (response.status === 401 || response.status === 403) {
        router.push('/auth/login');
      }

      return reason;
    }
  );

  return apiInstance;
}

export default request;
