import { useEffect } from 'react';

import useRequest from '../../../utils/useRequest';
import Summary from './Summary';

const TopTracks = () => {
  const {
    data: trackResponse,
    isLoading: isTrackLoading,
    error: trackError,
    get: getTrackInfo,
  } = useRequest();

  useEffect(() => {
    getTrackInfo(`/me/top/tracks/`);
  }, []);

  if (trackError) {
    return <p>{trackError}</p>;
  }

  if (isTrackLoading) {
    return <div>Fetching tracks features... </div>;
  }

  if (!trackResponse) {
    return <div>no data</div>;
  }

  const topTracksIds = trackResponse.items.map(({ id }) => id).join(',');

  return (
    <div>
      Top Tracks
      <Summary ids={topTracksIds} />
    </div>
  );
};

export default TopTracks;
