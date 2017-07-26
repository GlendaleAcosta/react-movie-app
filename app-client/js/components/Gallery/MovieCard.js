import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const movieStyle = {
  width: '20%',
  boxSizing: 'border-box',
  padding: '10px',
};

const titleStyle = {
  color: '#fff',
  fontSize: '13px',
  marginBottom: '5px',
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
      <ReactStars
        count={5}
        size={20}
        color2={'#ffd700'}
        value={props.vote_average / 2}
        edit={false}
      />
      <p style={titleStyle}>
        {props.title} ({props.release_date.slice(0, 4)})
      </p>
    </div>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default MovieCard;
