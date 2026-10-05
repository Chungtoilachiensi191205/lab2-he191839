import React from 'react';

const MovieItem = ({ movie, isFavorite, onToggleFavorite, onViewDetails }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
      <div className="card-actions">
        <button onClick={() => onToggleFavorite(movie.id)}>
          {isFavorite ? '❤️ Favorited' : '🤍 Favorite'}
        </button>
        <button onClick={() => onViewDetails(movie)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieItem;