import { useRouter } from 'next/router';
import Tracks from '../../feature/Tracks';

function PlaylistPage() {
  const router = useRouter();
  const { id } = router.query;

  return <Tracks id={id} />;
}

export default PlaylistPage;
