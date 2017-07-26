import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const containerStyles = {
  display: 'flex',
  paddingRight: '8px',
  paddingLeft: '10px',
};
const resultFeedback = {
  marginTop: '20px',
  marginBottom: '10px',
  marginLeft: '5px',
  color: '#fff',
};

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderMovies = this.renderMovies.bind(this);
  }

  renderMovies() {
    const gallery = this.props.movieReducer.movieGallery;
    if (gallery !== null) {
      const movies = gallery.results;
      return movies.map((movie, index) => {
        return (
          <MovieCard key={movie.id} index={index} {...movie} />
        );
      });
    }
    return null;
  }

  render() {
    return (
      <div>
        <p style={resultFeedback}>Showing results for popular movies...</p>
        <div className="row" style={containerStyles}>
          {this.renderMovies()}
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  movieReducer: PropTypes.object.isRequired,
};

export default Gallery;
