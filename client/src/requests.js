const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchPlaying: `movie/now_playing?api_key=${API_KEY}`,
  fetchPopular: `movie/popular?api_key=${API_KEY}`,
  fetchTop: `movie/top_rated?api_key=${API_KEY}`,
  fetchUpcoming: `movie/upcoming?api_key=${API_KEY}`,
  // fetch by genres
  fetchAction: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=10749`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=99`,
};
export default requests;
