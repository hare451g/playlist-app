import Album from './Album';
import Artist from './Artist';
import Credential from './Credential';
import Image from './Image';
import Playlist from './Playlist';
import PlaylistItem from './PlaylistItem';
import Track from './Track';
import User from './User';

export type ResponseData =
  | Album
  | Artist
  | Image
  | PlaylistItem
  | Playlist
  | Credential
  | Track
  | User;

export default interface Response {
  data?: ResponseData | [ResponseData];
  error?: string;
  message?: string;
}
