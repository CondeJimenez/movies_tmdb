import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const BASE_IMG = import.meta.env.VITE_API_URL_IMG;
const MoviesPresentacional = ({ peliculas }) => {
  return (
    <section className={styles.presentacional}>
      <Link to={`/detail/${peliculas.id}`} className={styles.link}>
        <h1 className={styles.title}>{peliculas.title}</h1>

        <img
          className={styles.img}
          src={`${BASE_IMG}${peliculas.poster_path}`}
          alt="Poster extraido de la API de TMDB"
        />
      </Link>
    </section>
  );
};

export default MoviesPresentacional;
