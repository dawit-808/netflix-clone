import { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";

function Banner() {
  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const api = import.meta.env.VITE_API_KEY;
  const base_url = "https://api.themoviedb.org/3/discover/movie";

  useEffect(() => {
    axios
      .get(`${base_url}?api_key=${api}`)
      .then((res) => {
        const results = res.data.results;
        const random = Math.floor(Math.random() * results.length);
        const poster = results[random].poster_path;
        const title = results[random].original_title;
        const description = results[random].overview;
        setPoster(poster);
        setTitle(title);
        setDescription(description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(https://image.tmdb.org/t/p/original${poster})`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-description">{description}</p>
      </div>
    </header>
  );
}

export default Banner;
