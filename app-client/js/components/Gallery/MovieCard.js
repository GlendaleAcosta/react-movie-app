import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const movieStyle = {
  width: '20%',
  boxSizing: 'border-box',
  padding: '10px',
};


const MovieCard = (props) => {
  const innerMovieStyle = {
    backgroundColor: 'maroon',
    width: '100%',
    height: '270px',
    backgroundImage: `url('http://image.tmdb.org/t/p/w185${props.poster_path}')`,
    backgroundSize: 'cover',
    cursor: 'pointer',
  };
  return (
    <div style={movieStyle}>
      <Link to={`/movie/${props.id}`}>
        <div style={innerMovieStyle} />
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
};

export default MovieCard;
