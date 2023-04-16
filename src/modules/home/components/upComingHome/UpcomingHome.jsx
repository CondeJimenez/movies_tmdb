import { useGetTypeMovieQuery } from "../../../../ redux/service/movie.service"
import HomePresentacional from "../../HomePresentacional"

const UpComingHome = ({filter,page}) => {
  const {data: results=[], isLoading} = useGetTypeMovieQuery(filter, page)
  return isLoading ? (
   <h2>Cargando</h2>
  ):(
    results.results.slice(0,20).map(pelicula  => (
      <HomePresentacional pelicula={pelicula} key={pelicula.id}/>
    ))

  )
}

export default UpComingHome