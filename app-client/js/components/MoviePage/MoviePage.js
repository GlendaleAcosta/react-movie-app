import React from 'react';
import PropTypes from 'prop-types';

const MoviePage = props => {
  const styles = {
    height: '1000px',
  };
  const topBgImg = {
    backgroundImage: `url('http://image.tmdb.org/t/p/w1280${props.currentMovie.backdrop_path}`,
  };

  const cardImg = {
    backgroundImage: `url('http://image.tmdb.org/t/p/w342${props.currentMovie.poster_path}`,
  };

  const { currentMovie } = props;
  console.log(currentMovie);
  return (
    <div style={styles}>
      <div style={topBgImg} className="movie-top-bg">
        <div style={cardImg} className="poster-card" />
        <div className="movie-rect" />
        <div className="movie-header-overlay" />
        <div className="movie-header-black-box" >
          <div className="row">
            <div className="col-md-8 offset-md-4 pl-50px">
              <h1 className="text-white movie-title">{currentMovie.title}</h1>
              <span className="badge badge-danger">Danger</span>
              <p className="text-white">{currentMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MoviePage.propTypes = {
  currentMovie: PropTypes.object.isRequired,
};

export default MoviePage;
