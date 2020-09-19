function makeAuthURL(): string | null {
  try {
    const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';

    const params = {
      client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      redirect_uri: process.env.NEXT_PUBLIC_CALLBACK_URL,
      response_type: 'token',
      scope: [
        'user-read-private',
        'user-read-email',
        'user-top-read',
        'playlist-read-private',
        'playlist-read-collaborative',
      ],
    };

    const composedParams = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    return `${SPOTIFY_AUTH_URL}?${composedParams}`;
  } catch (error) {
    return null;
  }
}

export default makeAuthURL;
