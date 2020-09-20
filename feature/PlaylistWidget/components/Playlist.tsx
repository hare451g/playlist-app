import Link from 'next/link';
import { useState } from 'react';

import Image from '../../../types/Image';
import PlaylistItem from '../../../types/PlaylistItem';

import style from './Playlist.module.css';

type PropTypes = {
  id: PlaylistItem['id'];
  image: Image['url'];
  name: PlaylistItem['name'];
  onPlaylistClick: (id: PlaylistItem['id']) => void;
};

const Playlist: React.FC<PropTypes> = ({
  id,
  image,
  name,
  onPlaylistClick,
}) => {
  return (
    <button className={style.buttonFrame} onClick={() => onPlaylistClick(id)}>
      <img src={image} className={style.albumArt} />
      <p>{name}</p>
    </button>
  );
};

export default Playlist;
