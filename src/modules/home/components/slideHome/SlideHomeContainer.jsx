import { useGetTypeMovieQuery } from "../../../../ redux/service/movie.service";
import randomMovie from "../../../../utils/randomMovie";
import SlideHomePresentacional from "./SlideHomePresentacional";

const SlideHomeContainer = () => {
  const { data: results = [], isLoading } = useGetTypeMovieQuery('top_rated', '1');
  let moviesHome;
  const newResults = structuredClone(results);
  
  
  if (!isLoading) {
    moviesHome = newResults?.results
      ?.sort(randomMovie)
      ?.filter((peliculas) => peliculas.popularity > 70 );
  } 
  return isLoading ? (
    <h2>Cargando...</h2>
  ) : (
    moviesHome?.slice(0,3).map((peliculas) => (
      <SlideHomePresentacional peliculas={peliculas} key={peliculas.id} />
    ))
  );
};

export default SlideHomeContainer;
