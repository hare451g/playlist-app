import dateFormat from 'date-fns/format';

import TrackType from '../../../types/Track';

import style from './Track.module.css';

type PropTypes = {
  name: TrackType['name'];
  artists: TrackType['artists'];
  duration: TrackType['duration_ms'];
  images: TrackType['album']['images'];
};

const Track: React.FC<PropTypes> = ({ name, artists, duration, images }) => {
  const composedArtists = artists.map((artist) => artist.name).join(',');
  const formattedDuration = dateFormat(duration, 'mm:ss');
  const albumArt = images.find(({ height }) => height === 64);

  return (
    <div className={style.container}>
      <img src={albumArt.url} />
      <div className={style.trackInfo}>
        <div className={style.name}>{name}</div>
        <div className={style.artist}>{composedArtists}</div>
      </div>
      <div>{formattedDuration}</div>
    </div>
  );
};

export default Track;
