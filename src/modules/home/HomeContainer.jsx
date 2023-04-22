import PopularHomeContainer from "./components/popularHome/PopularHomeContainer";
import NowplayingHome from "./components/nowPlayingHome/NowplayingHome";
import SlideHomeContainer from "./components/slideHome/SlideHomeContainer";
import ToRatedHome from "./components/toRatedHome/ToRatedHome";
import UpComingHome from "./components/upcomingHome/UpcomingHome";
import { Link } from "react-router-dom";
import styles from  "./main.module.css"

const HomeContainer = () => {
  return (
    // Aqui ira el grid
    // <h1>grid</h1>
    <section className={styles.gridContainer}>

      {/* slideHome no ponerle un Link */}
      <section  className={styles.slideHome}>
        <h1>Aqui ira el Slide de Home</h1>
        <SlideHomeContainer filter={"top_rated"} />
      </section>

      <section className= {styles.popularHome}>
        <Link to={'/popular'}>
          <h1>Aqui iran las Populares Popular</h1>
        </Link>
        <PopularHomeContainer filter={"popular"} />
      </section>

      <section className={styles.nowPlayingHome}>
        <h1>Aqui iran las Now Playing</h1>
        <NowplayingHome filter={"now_playing"} />
      </section>

      <section className={styles.asideHomeTopRated}>
        <h1>Aqui va TopRateHome</h1>
        <ToRatedHome filter={"top_rated"} />
      </section>

      <section className={styles.upComingHome}> 
        <h1>Aqui va UpcomingHome</h1>
        <UpComingHome filter={"upcoming"} />
      </section>

    </section>
  );
};

export default HomeContainer;
