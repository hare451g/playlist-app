import { useEffect } from 'react';
import numeral from 'numeral';

import TrackType from '../../../types/Track';
import TrackFeaturesTypes from '../../../types/TrackFeatures';
import useRequest from '../../../utils/useRequest';

type propTypes = {
  id: TrackType['id'];
};

const TrackInfo: React.FC<propTypes> = ({ id }) => {
  const {
    data: trackResponse,
    isLoading: isTrackLoading,
    error: trackError,
    get: getTrackInfo,
  } = useRequest();

  useEffect(() => {
    getTrackInfo(`/audio-features/${id}`);
  }, [id]);

  if (!id) {
    return <p>no id</p>;
  }

  if (trackError) {
    return <p>{trackError}</p>;
  }

  if (isTrackLoading) {
    return <div>Fetching tracks features... </div>;
  }

  if (!trackResponse) {
    return <div>no data</div>;
  }

  const features: TrackFeaturesTypes = trackResponse;

  return (
    <ul>
      <li>Acousticness: {numeral(features.acousticness).format('0%')}</li>
      <li>Danceability: {numeral(features.danceability).format('0%')}</li>
      <li>Energy: {numeral(features.danceability).format('0%')}</li>
      <li>
        Instrumentalness: {numeral(features.instrumentalness).format('0%')}
      </li>
      <li>Speechiness: {numeral(features.speechiness).format('0%')}</li>
      <li>Valence: {numeral(features.valence).format('0%')}</li>
    </ul>
  );
};

export default TrackInfo;
