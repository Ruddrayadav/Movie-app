import React, { use, useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { getPopularmovies, searchMovies } from "../../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setQuery] = useState("");
  const [movies, setmovies] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularmovies();
        setmovies(popularMovies);
      } catch (err) {
        console.log(err);
        seterror("Failed to load movies...");
      } finally {
        setloading(false);
      }
    };

    loadPopularMovies();
  }, []);

  function handleQuery(e) {
    setQuery(e.target.value);
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if(loading)return

    setloading(true)
    try {
      const searchResult = await searchMovies(searchQuery);
      setmovies(searchResult)
      seterror(null);
    } catch (err) {
      console.log(err)
      seterror("Failed to search movie...")
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handlesubmit}>
        <input
          value={searchQuery}
          onChange={handleQuery}
          type="text"
          placeholder="Search for movie ...."
          className="search-input"
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <MovieCard
                  movie={movie}
                  release_Date={movie.release_Date}
                  key={movie.id}
                />
              )
          )}
        </div>
      )}
    </div>
  );
}
export default Home;