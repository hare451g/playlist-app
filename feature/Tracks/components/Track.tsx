import dateFormat from 'date-fns/format';

import TrackType from '../../../types/Track';

import style from './Track.module.css';

type PropTypes = {
  artists: TrackType['artists'];
  duration: TrackType['duration_ms'];
  images: TrackType['album']['images'];
  name: TrackType['name'];
};

const Track: React.FC<PropTypes> = ({ artists, duration, images, name }) => {
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
