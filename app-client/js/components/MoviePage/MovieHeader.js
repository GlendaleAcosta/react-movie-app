import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from './MovieDetails';
import MovieBottomPoster from './MovieBottomPoster';
import MovieBottomHeader from './MovieBottomHeader';

const MovieHeader = (props) => {
  const topBgImg = {
    backgroundImage: `url('http://image.tmdb.org/t/p/w1280${props.currentMovie.backdrop_path}`,
  };

  const cardImg = {
    backgroundImage: `url('http://image.tmdb.org/t/p/w342${props.currentMovie.poster_path}`,
  };
  return (
    <div style={topBgImg} className="movie-top-bg">
      <div style={cardImg} className="poster-card" />
      <div className="movie-header-overlay" />
      <MovieDetails {...props} />
      <div className="movie-rect">
        <MovieBottomPoster {...props} />
        <MovieBottomHeader {...props} />
      </div>
    </div>
  );
};
MovieHeader.propTypes = {
  currentMovie: PropTypes.object.isRequired,
};

export default MovieHeader;
