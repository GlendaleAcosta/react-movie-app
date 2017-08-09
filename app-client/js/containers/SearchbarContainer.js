import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SearchBar from 'components/Navbar/SearchBar';
import { connect } from 'react-redux';

class SearchbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SearchBar {...this.props} />
    );
  }
}

// SearchbarContainer.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

function mapStateToProps(state) {
  return {
    movieReducer: state.movieReducer,
  };
}

export default connect(mapStateToProps)(SearchbarContainer);

