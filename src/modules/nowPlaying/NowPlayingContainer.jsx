import { useGetTypeMovieQuery } from "../../ redux/service/movie.service"
import MoviesPresentacional from "../Movies/MoviesPresentacional"


const NowPlayingContainer = () => {
  const {data: results=[], isLoading} = useGetTypeMovieQuery('now_playing', '1')
  console.log(results)
  return  isLoading ? (
    <h1>Cargando...</h1>
  ):(
    results.results.map(peliculas => (
      <MoviesPresentacional peliculas={peliculas} key={peliculas}/>
    ))
  )
}

export default NowPlayingContainer