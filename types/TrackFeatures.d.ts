import Track from './Track';

export default interface TrackFeatures {
  danceability: number;
  energy: number;
  key: number;
  loudness: number;
  mode: number;
  speechiness: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
  tempo: number;
  type: 'audio_features';
  id: Track['id'];
  uri: Track['uri'];
  track_href: Track['href'];
  analysis_url: string;
  duration_ms: Track['duration_ms'];
  time_signature: number;
}
