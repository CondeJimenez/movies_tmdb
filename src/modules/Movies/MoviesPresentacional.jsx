import { Link } from "react-router-dom";

// variable que instancia la api de IMGs
const BASE_IMG = import.meta.env.VITE_API_URL_IMG;
//porque meta.env
const MoviesPresentacional = ({ peliculas }) => {
  // se trai la prop peliculas ya destrucutrada 
  return (
    <section>
       {/* entonces es por defecto que train la ruta? osea APi popular, top_reted, now_playing */}
      {/* en el link to hay que poner la direccion a la que sera el detalle de la pelicula */}
      <Link>
        <h1>{peliculas.title}</h1>
      </Link>
      {/* porque se utilizan los ` `  */}
      {/* no entiendo esta sintaxis `${variable que trai las imagenes de la Api} ${aqui pues extrae la imagen de la API}` */}
      <img
        src={`${BASE_IMG}${peliculas.poster_path}`}
        alt="Poster extraido de la API de TMDB"
      />
    </section>
  );
};

export default MoviesPresentacional;