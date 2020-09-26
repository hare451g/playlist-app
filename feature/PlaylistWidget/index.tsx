import { useState } from 'react';

import Tracks from './components/Tracks';
import Deck from './components/Deck';

function PlaylistWidget() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <Deck onPlaylistClick={(id) => setSelectedId(id)} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Tracks id={selectedId} />
      </div>
    </div>
  );
}

export default PlaylistWidget;
