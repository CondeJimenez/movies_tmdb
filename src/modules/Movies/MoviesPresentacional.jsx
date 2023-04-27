import { Link } from "react-router-dom";
import styles from "../home/home.module.css"

const BASE_IMG = import.meta.env.VITE_API_URL_IMG;
const MoviesPresentacional = ({ peliculas }) => {
  console.log(styles)
  return (
    <section>
      {/* en el link to hay que poner la direccion a la que sera el detalle de la pelicula */}
      <Link className={styles.link}>
        <h1>{peliculas.title}</h1>
      </Link>
      <img
        src={`${BASE_IMG}${peliculas.poster_path}`}
        alt="Poster extraido de la API de TMDB"
      />
    </section>
  );
};

export default MoviesPresentacional;
