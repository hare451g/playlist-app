import Album from './Album';
import Artist from './Artist';

export default interface Track {
  album: Album;
  artist: Artist;
  available_markets: [string];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: 'track';
  uri: string;
}
