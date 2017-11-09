import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

const MovieBottomPoster = (props) => {
  const { currentMovie } = props;
  const rating = currentMovie.vote_average / 2;
  return (
    <div className="col-md-4 movie-bottom-poster">
      <p className="text-white m-0">Rating: 7.6/10</p>
      <ReactStars
        count={5}
        size={35}
        color2={'#ffd700'}
        value={rating}
        edit={false}
      />
    </div>
  );
};

MovieBottomPoster.propTypes = {
  currentMovie: PropTypes.object.isRequired,
};

export default MovieBottomPoster;
