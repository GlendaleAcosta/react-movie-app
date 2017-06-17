import React from 'react';
import MovieCard from './MovieCard';

const containerStyles = {
  display: 'flex',
};

const Gallery = () => {
  return (
    <div>
      <p>Showing results for popular movies...</p>
      <div className="row" style={containerStyles}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />

        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Gallery;
