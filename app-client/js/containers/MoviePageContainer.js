import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentMovie, getCredits } from 'actions/movieGalleryActions';
import MoviePage from 'components/MoviePage/MoviePage';

const styles = {
  overflow: 'hidden',
};

class MoviePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const movieID = props.match.params.id;
    props.dispatch(getCurrentMovie(movieID));
    props.dispatch(getCredits(movieID));
  }

  renderMoviePage() {
    const { currentMovie, credits } = this.props.movieReducer;
    if (currentMovie !== null) {
      return <MoviePage currentMovie={currentMovie} credits={credits} />;
    }
    return null;
  }

  render() {
    return (
      <div
        className="push-sm-2 col-sm-10 px-0"
        style={styles}
      >
        {this.renderMoviePage()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieReducer: state.movieReducer,
  };
}

MoviePageContainer.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  movieReducer: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(MoviePageContainer);
