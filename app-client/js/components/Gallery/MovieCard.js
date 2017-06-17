import React from 'react';

const movieStyle = {
  height: '250px',
  width: '20%',
  boxSizing: 'border-box',
  padding: '5px',
};

const innerMovieStyle = {
  backgroundColor: 'maroon',
  width: '100%',
  height: '100%',
};

const MovieCard = () => {
  return (
    <div style={movieStyle}>
      <div style={innerMovieStyle} />
    </div>
  );
};

export default MovieCard;
