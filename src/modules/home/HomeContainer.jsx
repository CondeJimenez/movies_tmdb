import PopularHomeContainer from "./components/popularHome/PopularHomeContainer";
import NowplayingHome from "./components/nowPlayingHome/NowplayingHome";
import SlideHomeContainer from "./components/slideHome/SlideHomeContainer";
import ToRatedHome from "./components/toRatedHome/ToRatedHome";
import UpComingHome from "./components/upComingHome/UpcomingHome";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

const HomeContainer = () => {
  return (
    <section className={styles.gridContainer}>

      <section className={styles.slideHome}>
        <section className={styles.slide}>
          <SlideHomeContainer />
        </section>
      </section>

      <section className={styles.popularAndNowPlayingHome}>
        <section>
          <h1 className={styles.title}>
            <Link to={"/popular"} className={styles.link}>
              Movies Most Popular
            </Link>
          </h1>
          <section className={styles.popuAndComing}>
            <PopularHomeContainer />
          </section>
        </section>

        <section>
          <h1 className={styles.title}>
            <Link to={"/now_playing"} className={styles.link}>
              Movies Now Playing
            </Link>
          </h1>
          <section className={styles.popuAndComing}>
            <NowplayingHome />
          </section>
        </section>
      </section>

      <section className={styles.asideHomeTopRated}>
        <h1 className={styles.title}>
          <Link to={"/top_rated"} className={styles.link}>
            Movies Top Rated
          </Link>
        </h1>
        <ToRatedHome />
      </section>

      <section className={styles.upComingHome}>
        <h1 className={styles.title}>
          <Link to={"/upcoming"} className={styles.link}>
            UpcomingHome
          </Link>
        </h1>
        <section className={styles.slide}>
          <UpComingHome />
        </section>
      </section>
    </section>
  );
};

export default HomeContainer;
