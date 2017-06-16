import React from 'react';
import { Link } from 'react-router-dom';

const NavRight = () => {
  return (
    <ul className="push-sm-2 col-sm-4 navbar-nav d-flex justify-content-end">
      <li className="nav-item">
        <Link to="/" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">Register</Link>
      </li>
    </ul>
  );
};

export default NavRight;
