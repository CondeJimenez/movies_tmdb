import { useGetTypeMovieQuery } from "../../../../ redux/service/movie.service"
import MoviesPresentacional from "../../../Movies/MoviesPresentacional"

const UpComingHome = () => {
  const {data:results=[], isLoading} = useGetTypeMovieQuery('upcoming', '1')

 
  return isLoading ? (
   <h2>Cargando</h2>
  ):(
    results?.results?.slice(0,5).map(peliculas  => (
      <MoviesPresentacional peliculas={peliculas} key={peliculas.id}/>
    ))

  )
}

export default UpComingHome