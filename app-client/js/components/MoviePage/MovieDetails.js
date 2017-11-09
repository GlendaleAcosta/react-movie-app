import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = (props) => {
  const { currentMovie } = props;
  return (
    <div className="movie-header-black-box" >
      <div className="row">
        <div className="col-md-8 offset-md-4 pl-50px">
          <h1 className="text-white movie-title">{currentMovie.title}</h1>
          <span className="badge badge-danger">Danger</span>
          <p className="text-white">{currentMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};
MovieDetails.propTypes = {
  currentMovie: PropTypes.object.isRequired,
};

export default MovieDetails;
