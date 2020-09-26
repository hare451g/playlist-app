import dateFormat from 'date-fns/format';

import TrackType from '../../../types/Track';

import style from './Track.module.css';

type PropTypes = {
  id: TrackType['id'];
  artists: TrackType['artists'];
  duration: TrackType['duration_ms'];
  images: TrackType['album']['images'];
  name: TrackType['name'];
  onTrackClick: (id: TrackType['id']) => void;
};

const Track: React.FC<PropTypes> = ({
  id,
  artists,
  duration,
  images,
  name,
  onTrackClick,
}) => {
  const composedArtists = artists.map((artist) => artist.name).join(',');
  const formattedDuration = dateFormat(duration, 'mm:ss');
  const albumArt = images.find(({ height }) => height === 64);

  return (
    <button className={style.container} onClick={() => onTrackClick(id)}>
      <img src={albumArt ? albumArt.url : ''} />
      <div className={style.trackInfo}>
        <div className={style.name}>{name}</div>
        <div className={style.artist}>{composedArtists}</div>
      </div>
      <div>{formattedDuration}</div>
    </button>
  );
};

export default Track;
