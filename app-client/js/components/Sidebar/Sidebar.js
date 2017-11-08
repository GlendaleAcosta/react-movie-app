import React, { Component } from 'react';
import axios from 'axios';
import { getGenres } from 'actions/sidebarActions';
import { getMoviesByGenre, getMoviesByFilter } from 'actions/movieGalleryActions';

const iconStyle ={
  color: '#5570a2',
  marginRight: '10px',
  fontSize: '15px',
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    console.log(props.sidebarReducer);
    this.state = {
      showGenres: false,
      showFilters: false,
      filters: [
        'Popular',
        'Now Playing',
        'Top Rated',
        'Upcoming',
      ]
    }
  }

  showFilters = () => {
    this.setState({
      showFilters: !this.state.showFilters,
      showGenres: false,
    })
  }

  showGenres = () => {
    if (!this.props.sidebarReducer.genres) {
      this.props.dispatch(getGenres());
    }
    this.setState({
      showGenres: !this.state.showGenres,
      showFilters: false,
    })
  }

  filterGenres(genre) {
    this.props.dispatch(getMoviesByGenre(genre.id))
  }
  
  renderGenres = () => {
    const that = this;
    const genres = this.props.sidebarReducer.genres || null;
    if (this.props.sidebarReducer.genres && this.state.showGenres) {
      return this.props.sidebarReducer.genres.map((genre) => {
        return (
          <li
            onClick={() => {
              this.filterGenres(genre)
            }}
            key={genre.id}
            className="text-white list-group-item child-item list-group-item-action"
          >
            <p>{genre.name}</p>
          </li>
        )
      });
    } else {
      return null;
    }
  }

  filter = (filter) => {
    this.props.dispatch(getMoviesByFilter(filter));
  }

  renderFilters = () => {
    if (this.state.showFilters) {
      return this.state.filters.map((filter, i) => {
        console.log(filter);
        return (
          <li
          onClick={() => {
            this.filter(filter)
          }}
          key={i}
          className="text-white list-group-item child-item list-group-item-action"
        >
          <p>{filter}</p>
        </li>
        )
      })
    }
  }

  render() {
    return (
      <div className="col-sm-2 sidebar">
        <div className="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action parent-group-item"
          >
            <i className="material-icons" style={iconStyle}>favorite</i>
            Favorites
            <span className="dropdown-toggle" style={{marginLeft: 'auto'}} />
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action parent-group-item"
            onClick={this.showFilters}
          >
            <i className="material-icons" style={iconStyle}>filter_list</i>
            Filters
            <span className="dropdown-toggle" style={{marginLeft: 'auto'}} />
          </button>
            {this.renderFilters()}
          <button
            type="button"
            className="list-group-item list-group-item-action parent-group-item"
            onClick={this.showGenres}
          >
            <i className="material-icons" style={iconStyle}>pregnant_woman</i>
            Genres
            <span className="dropdown-toggle" style={{marginLeft: 'auto'}} />
          </button>
            {this.renderGenres()}
        </div>

        <div className="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action parent-group-item"
          >
            <i className="material-icons" style={iconStyle}>code</i>
            Source Code
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
