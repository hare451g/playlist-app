import Track from './Track';
import User from './User';

export default interface PlaylistItem {
  added_at: string;
  added_by: User;
  is_local: false;
  track?: [Track];
}
