import React from 'react'
import "./css/Moviecard.css"
import { useMovieContext } from './context/MovieContext';
function MovieCard({movie}) {

   const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

function onFavoriteClick(){
  if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
}
  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
         <div className='movie-overlay'>
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick} >♥︎</button>
         </div>

      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <h3>{movie.release_date?.split("-")[0]}</h3>
      </div>

        
    </div>
  )
}
export default MovieCard;