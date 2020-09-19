import Artist from './Artist';
import Image from './Image';

export default interface Album {
  album_type: string;
  artists: [Artist];
  available_markets: [string];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: [Images];
  name: string;
  type: string;
  uri: string;
}
