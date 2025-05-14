import { useEffect, useState } from "react";
import axios from "../../../axios";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data?.results || []);
      } catch (error) {
        console.error(`Error fetching movies for ${title}:`, error);
      }
    };

    fetchData();
  }, [fetchUrl, title]);

  return (
    <>
      <div className="container-fluid my-4">
        <h4 className="text-white mb-3">{title}</h4>
        <div className="row-wrapper row flex-nowrap overflow-auto">
          {movies.map((movie) => (
            <div key={movie.id} className="col-2 flex-shrink-0">
              <img
                className="img-fluid h-100"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
