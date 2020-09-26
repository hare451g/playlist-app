import { useEffect, useState } from 'react';

import TrackType from '../../../types/Track';
import useRequest from '../../../utils/useRequest';

import Summary from './Summary';
import Track from './Track';
import TrackInfo from './TrackInfo';
import style from './Tracks.module.css';

function Tracks({ id }) {
  const [trackId, setTrackId] = useState(null);

  const {
    data: trackResponse = [],
    isLoading: isTrackLoading,
    error: trackError,
    get: getTracks,
  } = useRequest();

  useEffect(() => {
    getTracks(`/playlists/${id}/tracks`);
  }, [id]);

  if (!id) {
    return <p>no id</p>;
  }

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

    const ids = trackResponse.items.map(({ track }) => track.id).join(',');

    return (
      <div className={style.container}>
        <Summary ids={ids} />
        {trackList.map((track) => (
          <div>
            <Track
              id={track.id}
              artists={track.artists}
              duration={track.duration_ms}
              name={track.name}
              images={track.album.images}
              key={track.id}
              onTrackClick={(id) => setTrackId(id)}
            />
            {trackId === track.id && <TrackInfo id={trackId} />}
          </div>
        ))}
      </div>
    );
  }

  return <p>Track widget</p>;
}

export default Tracks;
