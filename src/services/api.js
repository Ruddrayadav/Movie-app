const API_KEY = "f88e51a1102d6dce0fff4a8907905f07";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularmovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json()
  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  )
  const data = await response.json();
  return data.results
};
