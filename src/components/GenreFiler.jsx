import React from 'react';

const GenreFiler = ({ selectedGenre, setSelectedGenre, sortOption, setSortOption }) => {
  return (
    <div className="controls">
      {/* Genre Filter */}
      <div className="control-group">
        <label>Genre: </label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All Genres">All Genres</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>

      {/* Sort Option */}
      <div className="control-group">
        <label>Sort by: </label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="Default">Default</option>
          <option value="Low -> High">Rating: Low → High</option>
          <option value="High -> Low">Rating: High → Low</option>
        </select>
      </div>
    </div>
  );
};

export default GenreFiler;