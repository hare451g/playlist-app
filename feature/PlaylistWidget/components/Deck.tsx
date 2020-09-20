import PlaylistType from '../../../types/Playlist';
import style from './Deck.module.css';
import Playlist from './Playlist';

type PropTypes = {
  list: PlaylistType['items'];
  total: PlaylistType['total'];
  next: PlaylistType['next'];
  prev: PlaylistType['previous'];
};

const Deck: React.FC<PropTypes> = ({ list, total, next, prev }) => (
  <div className={style.container}>
    {list.map((item) => (
      <Playlist id={item.id} image={item.images[0].url} name={item.name} />
    ))}
  </div>
);

export default Deck;
