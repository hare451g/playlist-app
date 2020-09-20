import { useRouter } from 'next/router';

import Tracks from '../../feature/Tracks';

function PlaylistPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Tracks id={id} />
    </div>
  );
}

export default PlaylistPage;
