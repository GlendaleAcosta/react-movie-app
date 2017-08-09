import React from 'react';
import { Link } from 'react-router-dom';
import SearchbarContainer from 'containers/SearchbarContainer';
import Hamburger from './Hamburger';
import NavRight from './NavRight';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
      <Hamburger />
      <Link to="/" className="navbar-brand text-white">Movie App</Link>

      <div className="collapse navbar-collapse row">
        <SearchbarContainer {...props} />
        <NavRight />
      </div>
    </nav>
  );
};

export default Navbar;
