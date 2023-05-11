import NowPlayingContainer from "../modules/nowPlaying/NowPlayingContainer";
import styles from './styles.module.css'

const NowPlaying = () => {
  return (
    <section className={styles.sectionTypeMovie}>
      <NowPlayingContainer />
    </section>
  );
};

export default NowPlaying;
