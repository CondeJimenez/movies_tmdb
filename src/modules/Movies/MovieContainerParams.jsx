import { useParams } from "react-router-dom";
import { useGetMovieDetailQuery } from "../../ redux/service/movie.service";
import MovieDetail from "./MovieDetail";

const MovieContainerParams = () => {
  let { id } = useParams();
  const { data, isLoading, isError } = useGetMovieDetailQuery(id);
  console.log(data);

  return isLoading ? <h2>Cargando...</h2> : <MovieDetail movie={data} />;
};

export default MovieContainerParams;
