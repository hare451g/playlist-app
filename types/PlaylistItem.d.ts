import Image from './Image';
import Track from './Track';
import User from './User';

export default interface PlaylistItem {
  id: string;
  added_at: string;
  added_by: User;
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  is_local: boolean;
  images: [Image];
  name: string;
  owner: User;
  public: boolean;
  primary_color: string | null;
  snapshot_id: string;
  type: 'playlist';
  tracks?: {
    href: string;
    total: number;
  };
  uri: string;
}
