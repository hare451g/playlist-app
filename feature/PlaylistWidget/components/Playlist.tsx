import Link from 'next/link';

import Image from '../../../types/Image';
import PlaylistItem from '../../../types/PlaylistItem';

import style from './Playlist.module.css';

type PropTypes = {
  id: PlaylistItem['id'];
  image: Image['url'];
};

const Playlist: React.FC<PropTypes> = ({ id, image }) => {
  return (
    <Link href={`/playlist/${id}`}>
      <div
        className={style.container}
        style={{ backgroundImage: `url(${image})` }}
      />
    </Link>
  );
};

export default Playlist;
