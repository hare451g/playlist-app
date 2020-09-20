import { useEffect } from 'react';

import TrackType from '../../types/Track';
import useRequest from '../../utils/useRequest';
import Track from './components/Track';

function Tracks({ id }) {
  const {
    data: trackResponse = [],
    isLoading: isTrackLoading,
    error: trackError,
    get: getTracks,
  } = useRequest();

  useEffect(() => {
    getTracks(`/playlists/${id}/tracks`);
  }, []);

  if (trackError) {
    return <p>{trackError}</p>;
  }

  if (isTrackLoading) {
    return <div>Fetching tracks ... </div>;
  }

  if (trackResponse.items && trackResponse.items.length) {
    const trackList: [TrackType] = trackResponse.items.map(
      ({ track }) => track
    );
    return (
      <div>
        {trackList.map((track) => (
          <Track
            artists={track.artists}
            duration={track.duration_ms}
            name={track.name}
            images={track.album.images}
            key={track.id}
          />
        ))}
      </div>
    );
  }

  return <p>Track widget</p>;
}

export default Tracks;
