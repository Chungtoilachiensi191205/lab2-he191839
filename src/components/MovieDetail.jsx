import React from 'react';

const MovieDetail = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Movie Details</h2>
        <p><strong>Title:</strong> {movie.title}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p><strong>Description:</strong> {movie.description}</p>
        <button className="close-btn" onClick={onClose}>
          [Close]
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;