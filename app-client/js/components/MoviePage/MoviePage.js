import React from 'react';
import PropTypes from 'prop-types';

const MoviePage = props => {
  const styles = {
    height: '1000px',
  };
  const topBg = {
    height: '625px',
    width: '100%',
    backgroundImage: `url('http://image.tmdb.org/t/p/w1280/${props.currentMovie.backdrop_path}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    zIndex: '1',
  };
  const rect = {
    height: '200px',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: '-150px',
    zIndex: '3',
    width: '120%',
    transform: 'translate(-10%, -25%) rotate(-2deg)',
  };

  const card = {
    width: '330px',
    height: '420px',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    left: '35px',
    zIndex: '4',
  };

  const { currentMovie } = props;
  return (
    <div style={styles}>
      <div style={topBg}>
        <h1>{currentMovie.title}</h1>
        <div style={card} />
        <div style={rect} />
      </div>
    </div>
  );
};

MoviePage.propTypes = {
  currentMovie: PropTypes.object.isRequired,
};

export default MoviePage;
