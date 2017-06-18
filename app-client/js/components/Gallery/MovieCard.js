import React from 'react';
import PropTypes from 'prop-types';

const movieStyle = {
  width: '20%',
  boxSizing: 'border-box',
  padding: '10px',
};


const MovieCard = (props) => {
  console.log(props);
  const innerMovieStyle = {
    backgroundColor: 'maroon',
    width: '100%',
    height: '270px',
    backgroundImage: `url('http://image.tmdb.org/t/p/w185${props.poster_path}')`,
    backgroundSize: 'cover',
  };
  return (
    <div style={movieStyle}>
      <div style={innerMovieStyle} />
    </div>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
};

export default MovieCard;
