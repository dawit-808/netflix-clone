import { useEffect, useState } from "react";
import axios from "../../axios";
import "./Banner.css";

function Banner() {
  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const api = import.meta.env.VITE_API_KEY;
  const image_base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchBannerMovie = async () => {
      try {
        const res = await axios.get(`/discover/movie?api_key=${api}`);
        const results = res.data.results;
        const random = Math.floor(Math.random() * results.length);
        const movie = results[random];

        setPoster(movie.backdrop_path);
        setTitle(movie.title);
        setDescription(movie.overview);
      } catch (err) {
        console.error("Failed to fetch banner movie:", err);
      }
    };

    fetchBannerMovie();
  }, []);

  // text minimizer
  const truncateString = (string, maxLength) =>
    string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0) 50%)
, url(${image_base_url}${poster})`,
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">{title}</h1>
          <div className="banner-buttons my-4">
            <button className="btn btn-light me-2">Play</button>
            <button className="btn btn-outline-light">Watch List</button>
          </div>
          <p className="banner-description">
            {truncateString(description, 150)}
          </p>
        </div>
      </header>
    </>
  );
}

export default Banner;
