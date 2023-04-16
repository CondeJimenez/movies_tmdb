import { useGetTypeMovieQuery } from "../../../../ redux/service/movie.service";
import randomMovie from "../../../../utils/randomMovie.js";
import MoviesPresentacional from "../../../Movies/MoviesPresentacional";

const PopularHomeContainer = ({ filter, page = 1 }) => {
  const { data: results = [], isLoading } = useGetTypeMovieQuery(filter, page);
  const newResults = structuredClone(results);

  return isLoading || newResults.length === 0 ? (
    <h3>Cargando...</h3>
  ) : (
    newResults.results
      .sort(randomMovie)
      .slice(0, 5)
      .map((peliculas) => (
        <MoviesPresentacional peliculas={peliculas} key={peliculas.id} />
      ))
  );
};

export default PopularHomeContainer;
