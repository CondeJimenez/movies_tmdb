import { useGetTypeMovieQuery } from "../../../../ redux/service/movie.service";
import MoviesPresentacional from "../../../Movies/MoviesPresentacional";

const ToRatedHome = ({ filter, page = 1 }) => {
  const { data: results = [], isLoading } = useGetTypeMovieQuery('top_rated', '1');
  return isLoading ? (
    <h2>cargando...</h2>
  ) : (
    results.results
      .slice(0, 12)
      .map((peliculas) => (
        <MoviesPresentacional peliculas={peliculas} key={peliculas.id} />
      ))
  );
};

export default ToRatedHome;
