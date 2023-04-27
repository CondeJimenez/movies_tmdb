import { useGetTypeMovieQuery } from "../../ redux/service/movie.service"
import MoviesPresentacional from "../Movies/MoviesPresentacional"


const UpComingContainer = () => {
    const {data: results=[], isLoading} = useGetTypeMovieQuery('upcoming','1')
  return isLoading ? (
<h2>Cargando....</h2>
  ):(
    results.results.map(peliculas => (
        <MoviesPresentacional peliculas={peliculas} key={peliculas.id}/>
    ))
  )
}

export default UpComingContainer