import React from 'react';
import PropTypes from 'prop-types';
import MovieHeader from './MovieHeader';
import MovieCast from './MovieCast';
import MovieTrailers from './MovieTrailers';

const MoviePage = props => {
  console.log(props);
  let castArr = [];
  let castArr2 = [];
  if (props.credits) {
    let j = 0;
    for (let i = 0; i < props.credits.cast.length; i++, j++) {
      if (j < 4) {
        castArr2.push(props.credits.cast[i]);
      } else {
        castArr.push(castArr2);
        j = -1;
        castArr2 = null;
        castArr2 = [];
      }
    }
  }
  if (castArr2 != null) {
    castArr.push(castArr2);
  }

  return (
    <div>
      <MovieHeader {...props} />
      <MovieCast castArr={castArr} {...props} />
      <div className="row">
        <MovieTrailers {...props} />
      </div>
    </div>
  );
};

MoviePage.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  credits: PropTypes.object.isRequired,
};

export default MoviePage;
