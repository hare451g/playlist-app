import { useEffect } from 'react';

import PlaylistType from '../../types/Playlist';
import useRequest from '../../utils/useRequest';

import Deck from './components/Deck';

function PlaylistWidget() {
  const {
    data: playlistsData,
    isLoading: isPlaylistLoading,
    error: playlistError,
    get: getPlaylist,
  } = useRequest();

  useEffect(() => {
    getPlaylist('/me/playlists');
  }, []);

  if (playlistError) {
    return <p>{playlistError}</p>;
  }

  if (isPlaylistLoading) {
    return <div>Fetching playlists ... </div>;
  }

  const playlists: PlaylistType = playlistsData;

  if (playlists) {
    return (
      <Deck
        list={playlists.items}
        next={playlists.next}
        prev={playlists.previous}
        total={playlists.total}
      />
    );
  }

  return <p>Playlist widget</p>;
}

export default PlaylistWidget;
