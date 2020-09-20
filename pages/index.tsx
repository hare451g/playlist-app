import PlaylistWidget from '../feature/PlaylistWidget';
import UserWidget from '../feature/UserWidget';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <PlaylistWidget />
    </div>
  );
}
