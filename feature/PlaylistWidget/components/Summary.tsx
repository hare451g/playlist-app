import { useEffect } from 'react';

import TrackFeaturesTypes from '../../../types/TrackFeatures';
import useRequest from '../../../utils/useRequest';

type propTypes = {
  ids: string;
};

const Summary: React.FC<propTypes> = ({ ids }) => {
  const {
    data: trackResponse,
    isLoading: isTrackLoading,
    error: trackError,
    get: getTrackInfo,
  } = useRequest();

  useEffect(() => {
    getTrackInfo(`/audio-features/`, { ids });
  }, [ids]);

  if (!ids) {
    return <p>no id provided</p>;
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

  const features: [TrackFeaturesTypes] = trackResponse;

  const happinessRatio =
    features.audio_features
      .map(({ valence }) => valence)
      .reduce((acc, current) => current + acc, 0) /
    features.audio_features.length;

  const happiness = happinessRatio > 0.5 ? 'Happy' : 'Sad';

  return (
    <div>
      {happiness} ratio: {happinessRatio}
    </div>
  );
};

export default Summary;
