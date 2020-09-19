import { useEffect } from 'react';
import Playlist from '../../types/Playlist';
import useRequest from '../../utils/useRequest';

function PlaylistWidget() {
  const { data, isLoading, error, get } = useRequest();

  useEffect(() => {
    get('/me/playlists');
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <div>Fetching playlists ... </div>;
  }

  const playlists: Playlist = data;

  if (playlists) {
    return (
      <div>
        {playlists.items.map((item) => (
          <div key={item.id}>
            <img src={item.images[0].url} width="128px" />
            <ul>
              <li>{item.name}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return <p>Playlist widget</p>;
}

export default PlaylistWidget;
