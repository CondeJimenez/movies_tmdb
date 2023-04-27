import PopularHomeContainer from "./components/popularHome/PopularHomeContainer";
import NowplayingHome from "./components/nowPlayingHome/NowplayingHome";
import SlideHomeContainer from "./components/slideHome/SlideHomeContainer";
import ToRatedHome from "./components/toRatedHome/ToRatedHome";
import UpComingHome from "./components/upComingHome/UpcomingHome";
import { Link } from "react-router-dom";
import styles from  "./main.module.css"

const HomeContainer = () => {
  return (
    // Aqui ira el grid
      
    <section className={styles.gridContainer}>

      <section  className={styles.slideHome}>
        <h1>Aqui ira el Slide de Home</h1>
        <SlideHomeContainer/>
      </section>

      <section className= {styles.popularHome}>
        <Link to={'/popular'}>
          <h1>Aqui iran las Populares Popular</h1>
        </Link>
        <PopularHomeContainer />
      </section>

      <section className={styles.nowPlayingHome}>
        <h1>Aqui iran las Now Playing</h1>
        <NowplayingHome />
      </section>

      <section className={styles.asideHomeTopRated}>
        <h1>Aqui va TopRateHome</h1>
        <ToRatedHome  />
      </section>

      <section className={styles.upComingHome}> 
        <h1>Aqui va UpcomingHome</h1>
        <UpComingHome/>
      </section>

    </section>
  );
};

export default HomeContainer;
