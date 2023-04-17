
import { useGetTypeMovieQuery } from "../../ redux/service/movie.service"
import MoviesPresentacional from "../Movies/MoviesPresentacional"


const PopularContainer = () => {
  // me trajo el servi io
  const {data: results= [], isLoading} = useGetTypeMovieQuery('popular', '1')
  return isLoading ?  (
    <h1>Cargando...</h1>
  ):(
    results.results.map(peliculas => (
    <MoviesPresentacional peliculas={peliculas} key={peliculas.id}/>
    ))
  )
}

export default PopularContainer