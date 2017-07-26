import React, { Component } from 'react';

const SearchBarStyle = {
  borderRadius: '20px',
  backgroundColor: '#252b33',
  border: '1px solid #f36',
  color: '#fff',
  paddingLeft: '20px',
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="push-sm-2 col-sm-6 form-inline my-2 my-lg-0 input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search Movies..."
          style={SearchBarStyle}
        />
      </form>
    );
  }
}

export default SearchBar;
