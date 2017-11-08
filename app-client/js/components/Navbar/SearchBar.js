import React, { Component } from 'react';
import { getSearchResults } from 'actions/movieGalleryActions';
import PropTypes from 'prop-types';
// import { getSearchResults } from 'actions/movieGalleryActions';

const SearchBarStyle = {
  borderRadius: '20px',
  backgroundColor: 'rgba(0,0,0,0)',
  border: '1px solid #f36',
  color: '#fff',
  paddingLeft: '20px',
};


const searchStyle = {
  color: '#3e647d',
  position: 'absolute',
  right: '30px',
  zIndex: '5',
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { movieQuery: '' };
    this.handleChange = this.handleChange.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  handleChange(e) {
    this.setState({ movieQuery: e.target.value });
  }

  searchMovie(e) {
    e.preventDefault();
    this.props.history.push(`/movies/search/${this.state.movieQuery}`);
    this.props.dispatch(getSearchResults(this.state.movieQuery));
    this.state.movieQuery = '';
  }

  render() {
    return (
      <form
        onSubmit={this.searchMovie}
        className="push-sm-2 col-sm-6 form-inline my-2 my-lg-0 input-group"
      >
        <input
          className="form-control"
          type="text"
          placeholder="Search Movies..."
          style={SearchBarStyle}
          value={this.state.movieQuery}
          onChange={this.handleChange}
        />
        <i className="material-icons" style={searchStyle}>search</i>
      </form>
    );
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default SearchBar;
