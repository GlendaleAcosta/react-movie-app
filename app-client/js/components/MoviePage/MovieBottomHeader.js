import React from 'react';
import PropTypes from 'prop-types';

const MovieBottomHeader = (props) => {
  const { currentMovie } = props;
  return (
    <div className="col-md-8 pl-50px movie-bottom-header">
      <p className="text-white lead">More information about {currentMovie.title}:</p>
      <div className="row">
        <div className="col-md-6">
          <ul className="text-white">
            <li>Budget: ${currentMovie.budget}</li>
            <li>Status: {currentMovie.status}</li>
            <li>Release Date: {currentMovie.release_date}</li>
            <li>Runtime: {currentMovie.runtime} minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

MovieBottomHeader.propTypes = {
  currentMovie: PropTypes.object.isRequired,
};

export default MovieBottomHeader;
