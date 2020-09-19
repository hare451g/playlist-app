import PlaylistItem from './PlaylistItem';

export default interface Playlist {
  href: string;
  items: [PlaylistItem];
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
}
