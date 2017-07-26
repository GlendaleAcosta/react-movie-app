import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'components/Gallery/Gallery';
import { connect } from 'react-redux';
import { getMovies } from 'actions/movieGalleryActions';

const styles = {
  backgroundColor: '#2b3954',
};

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    props.dispatch(getMovies('popular'));
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

