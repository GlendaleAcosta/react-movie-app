import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Hamburger from './Hamburger';
import NavRight from './NavRight';

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
      <Hamburger />
      <Link to="/" className="navbar-brand">Movie App</Link>

      <div className="collapse navbar-collapse row">
        <SearchBar />
        <NavRight />
      </div>
    </nav>
  );
};

export default Navbar;
