import styles from "./styles.module.css";
const SlideHomePresentacional = ({ peliculas }) => {
  const BASE_IMG = import.meta.env.VITE_API_URL_IMG;
  return (
    <>
      <img
        className={styles.presentacional}
        src={`${BASE_IMG}${peliculas.poster_path}`}
        alt="Poster extraido de la API de TMDB"
      />
    </>
  );
};

export default SlideHomePresentacional;
