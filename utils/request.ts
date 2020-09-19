import axios, { AxiosInstance } from 'axios';
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

  return apiInstance;
}

export default request;
