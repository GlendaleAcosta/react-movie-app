import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'components/Gallery/Gallery';
import { connect } from 'react-redux';
import { getSearchResults, getFilteredMovies } from 'actions/movieGalleryActions';

const styles = {
  backgroundColor: '#2b3954',
};

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    if (props.location.pathname === '/' && !props.match.params.query) {
      this.props.dispatch(getFilteredMovies('popular'));
    } else if (props.match.params.query) {
      this.props.dispatch(getSearchResults(this.props.match.params.query));
    }
  }

  render() {
    return (
      <div className="push-sm-2 col-sm-10" style={styles}>
        <Gallery {...this.props} />
      </div>
    );
  }
}

GalleryContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    movieReducer: state.movieReducer,
  };
}
// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({ getMovies });
// }
export default connect(mapStateToProps)(GalleryContainer);

