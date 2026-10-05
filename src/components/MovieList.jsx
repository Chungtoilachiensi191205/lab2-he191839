import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, favorites, onToggleFavorite, onViewDetails }) => {
  if (movies.length === 0) {
    return <p className="no-movies">No movies found matching your criteria.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default MovieList;