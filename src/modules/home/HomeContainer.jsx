import React from "react";
import PopularHomeContainer from "./components/popularHome/PopularHomeContainer";
import NowplayingHome from "./components/nowPlayingHome/NowplayingHome";
import SlideHomeContainer from "./components/slideHome/SlideHomeContainer";
import ToRatedHome from "./components/toRatedHome/ToRatedHome";
import UpComingHome from "./components/upcomingHome/UpcomingHome";

const HomeContainer = () => {
  return (
    <>

      {/* slideHome no ponerle un Link */}
      <section>
        <h1>Aqui ira el Slide de Home</h1>
        <SlideHomeContainer filter={"top_rated"} />
      </section>
      
      <section>
        {/* Link al h1 to y te rediriga a la ruta a la seccion de peliculas */}        
        <h1>Aqui iran las Populares Popular</h1>
        <PopularHomeContainer filter={"popular"} />
      </section>

      <section>
        <h1>Aqui iran las Now Playing</h1>
        <NowplayingHome filter={"now_playing"} />
      </section>
      <section>
        <h1>Aqui va TopRateHome</h1>
        <ToRatedHome filter={"top_rated"} />
      </section>
      <section>
        <h1>Aqui va UpcomingHome</h1>
        <UpComingHome filter={"upcoming"} />
      </section>
    </>
  );
};

export default HomeContainer;
