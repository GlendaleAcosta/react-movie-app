import React from 'react';

const SearchBar = () => {
  return (
    <form className="push-sm-2 col-sm-6 form-inline my-2 my-lg-0 input-group">
      <input className="form-control" type="text" placeholder="Search Movies..." />
      <span className="input-group-addon" id="btnGroupAddon">Search</span>
    </form>
  );
};

export default SearchBar;
