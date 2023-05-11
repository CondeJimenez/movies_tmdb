import { Link } from "react-router-dom";
import styles from "./styles.module.css"

const BASE_IMG = import.meta.env.VITE_API_URL_IMG;
const MoviesPresentacional = ({ peliculas }) => {
  console.log(peliculas);
  
  return (
    <section className={styles.presentacional}>
      {/* en el link to hay que poner la direccion a la que sera el detalle de la pelicula */}
      
        <h1 className={styles.title}>{peliculas.title}</h1>
      
      <img
        className={styles.img}
        src={`${BASE_IMG}${peliculas.poster_path}`}
        alt="Poster extraido de la API de TMDB"
      />
    </section>
  );
};

export default MoviesPresentacional;
