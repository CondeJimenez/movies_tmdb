import PopularHomeContainer from "./components/popularHome/PopularHomeContainer";
import NowplayingHome from "./components/nowPlayingHome/NowplayingHome";
import SlideHomeContainer from "./components/slideHome/SlideHomeContainer";
import ToRatedHome from "./components/toRatedHome/ToRatedHome";
import UpComingHome from "./components/upComingHome/UpcomingHome";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

const HomeContainer = () => {
  return (
    // Aqui ira el grid

    <section className={styles.gridContainer}>
      <section className={styles.slide}>
        <h1>Aqui ira el Slide de Home</h1>
        <section className={styles.slide}>
          <SlideHomeContainer />
        </section>
      </section>

      <section className={styles.popularHome}>
        <Link to={"/popular"} className={styles.link}>
          <h1>Aqui iran las Populares Popular</h1>
        </Link>
        <section className={styles.popularAndUpcoming}>
          <PopularHomeContainer />
        </section>
      </section>

      <section className={styles.nowPlayingHome}>
        <h1>Aqui iran las Now Playing</h1>
        <section className={styles.popularAndUpcoming}>
        <NowplayingHome />
        </section>
        
      </section>

      <section className={styles.asideHomeTopRated}>
        <h1>Aqui va TopRateHome</h1>
        <ToRatedHome />
      </section>

      <section className={styles.upComingHome}>
        <h1>Aqui va UpcomingHome</h1>
        <section className={styles.slide}>
          <UpComingHome />
        </section>
      </section>
    </section>
  );
};

export default HomeContainer;
