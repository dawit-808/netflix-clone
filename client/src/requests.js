const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchPlaying: `movie/now_playing?api_key=${API_KEY}`,
  fetchPopular: `movie/popular?api_key=${API_KEY}`,
  fetchTop: `movie/top_rated?api_key=${API_KEY}`,
  fetchUpcoming: `movie/upcoming?api_key=${API_KEY}`,
};

export default requests;
