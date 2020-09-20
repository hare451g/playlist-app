import { useEffect } from 'react';

import PlaylistType from '../../../types/Playlist';
import useRequest from '../../../utils/useRequest';

import style from './Deck.module.css';
import Playlist from './Playlist';

const Deck: React.FC = () => {
  const {
    data: playlistsData,
    isLoading: isPlaylistLoading,
    error: playlistError,
    get: getPlaylist,
  } = useRequest();

  useEffect(() => {
    getPlaylist('/me/playlists');
  }, []);

  if (isPlaylistLoading) {
    return (
      <div className={style.container}>
        {[...new Array(10)].map(() => (
          <div className={style.loadingContainer}>
            <div className={style.loadingImage} />
            <div className={style.loadingLabel} />
          </div>
        ))}
      </div>
    );
  }

  if (playlistsData) {
    const playlists: PlaylistType = playlistsData;

    return (
      <div className={style.container}>
        {playlists.items.map((item) => (
          <Playlist id={item.id} image={item.images[0].url} name={item.name} />
        ))}
      </div>
    );
  }

  return <div>something went wrong</div>;
};

export default Deck;
