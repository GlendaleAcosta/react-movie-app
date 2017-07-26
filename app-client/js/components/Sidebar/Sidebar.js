import React, { Component } from 'react';

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
            Favorites
            <span className="dropdown-toggle" style={{marginLeft: 'auto'}} />
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action active"
            onClick={this.showFilters}
          >
            Filters
            <span className="dropdown-toggle" style={{marginLeft: 'auto'}} />
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={this.showGenres}
          >
            Genres
            <span className="dropdown-toggle" style={{marginLeft: 'auto'}} />
          </button>
        </div>

        <div className="list-group ">
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            Source Code
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
