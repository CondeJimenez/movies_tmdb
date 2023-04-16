import { useGetTypeMovieQuery } from "../../../../ redux/service/movie.service";
import randomMovie from "../../../../utils/randomMovie";
import HomePresentacional from "../../HomePresentacional";

const SlideHomeContainer = ({ filter, page = 1 }) => {
  const { data: results = [], isLoading } = useGetTypeMovieQuery(filter, page);
  let moviesHome;
  const newResults = structuredClone(results);
  
  // prefijo de las img /Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg
  

  if (!isLoading) {
    moviesHome = newResults.results
      .sort(randomMovie)
      .filter((peliculas) => peliculas.popularity > 70);
  }
  console.log(moviesHome);

  return isLoading ? (
    <h2>Cargando...</h2>
  ) : (
    moviesHome.map((pelicula) => (
      <HomePresentacional pelicula={pelicula} key={pelicula.id} />
    ))
  );
};

export default SlideHomeContainer;
