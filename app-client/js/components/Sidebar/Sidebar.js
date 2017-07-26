import React, { Component } from 'react';

const iconStyle ={
  color: '#fff',
  marginRight: '10px',
  fontSize: '14px',
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  showFilters = () => {
    console.log('Hello');
  }

  showGenres = () => {
    console.log('Hello');
  }

  render() {
    return (
      <div className="col-sm-2 sidebar">
        <div className="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            <i className="material-icons" style={iconStyle}>favorite</i>
            Favorites
            <span className="dropdown-toggle" style={{marginLeft: 'auto'}} />
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action active"
            onClick={this.showFilters}
          >
            <i className="material-icons" style={iconStyle}>filter_list</i>
            Filters
            <span className="dropdown-toggle" style={{marginLeft: 'auto'}} />
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={this.showGenres}
          >
            <i className="material-icons" style={iconStyle}>pregnant_woman</i>
            Genres
            <span className="dropdown-toggle" style={{marginLeft: 'auto'}} />
          </button>
        </div>

        <div className="list-group ">
          <button
            type="button"
            className="list-group-item list-group-item-action"
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
