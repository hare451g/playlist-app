import Link from 'next/link';
import { useState } from 'react';

import Image from '../../../types/Image';
import PlaylistItem from '../../../types/PlaylistItem';

import style from './Playlist.module.css';

type PropTypes = {
  id: PlaylistItem['id'];
  image: Image['url'];
  name: PlaylistItem['name'];
};

const Playlist: React.FC<PropTypes> = ({ id, image, name }) => {
  return (
    <div>
      <img src={image} className={style.albumArt} />
      <p>{name}</p>
    </div>
  );
};

export default Playlist;
