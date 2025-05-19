import { useEffect, useState } from "react";
import axios from "../../../axios";
import YouTube from "react-youtube";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <h4 className="text-white mb-3">{title}</h4>
        <div className="row-wrapper row flex-nowrap overflow-auto">
          {movies.map((movie) => (
            <div key={movie.id} className="col-2 flex-shrink-0">
              <div
                onClick={() => {
                  handleClick(movie);
                }}
                className="img-container position-relative"
              >
                <img
                  className="img-fluid h-100"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <div className="play-icon-circle">
                  <i className="fas fa-play play-icon"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            opts={{
              height: "390",
              width: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        )}
      </div>
    </>
  );
}

export default Row;
