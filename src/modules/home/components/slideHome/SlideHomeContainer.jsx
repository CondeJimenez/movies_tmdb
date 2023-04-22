import { useGetTypeMovieQuery } from "../../../../ redux/service/movie.service";
import randomMovie from "../../../../utils/randomMovie";
import SlideHomePresentacional from "./SlideHomePresentacional";

const SlideHomeContainer = ({ filter, page = 1 }) => {
  const { data: results = [], isLoading } = useGetTypeMovieQuery(filter, page);
  let moviesHome;
  const newResults = structuredClone(results);
  
  
  if (!isLoading) {
    moviesHome = newResults?.results
      .sort(randomMovie)
      .slice(0,1)
      .filter((peliculas) => peliculas.popularity > 70 );
  }
  console.log(moviesHome);
  return isLoading ? (
    <h2>Cargando...</h2>
  ) : (
    moviesHome?.map((peliculas) => (
      <SlideHomePresentacional peliculas={peliculas} key={peliculas.id} />
    ))
  );
};

export default SlideHomeContainer;
