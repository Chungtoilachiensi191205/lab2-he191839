import React, { useState } from 'react';
import { moviesData } from './datas/movies';
import { ThemeProvider } from './context/ThemeContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFiler from './components/GenreFiler';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

function MainContent() {
  const [movies] = useState(moviesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [sortOption, setSortOption] = useState('Default');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Lưu danh sách yêu thích bằng Hook useLocalStorage
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Tìm kiếm, Lọc theo thể loại & Sắp xếp theo Rating
  const filteredAndSortedMovies = movies
    .filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGenre =
        selectedGenre === 'All Genres' || movie.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      if (sortOption === 'Low -> High') return a.rating - b.rating;
      if (sortOption === 'High -> Low') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="main-content">
      <Header />
      <div className="filter-bar">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <GenreFiler
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </div>
      <MovieList
        movies={filteredAndSortedMovies}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onViewDetails={setSelectedMovie}
      />
      <MovieDetail
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}