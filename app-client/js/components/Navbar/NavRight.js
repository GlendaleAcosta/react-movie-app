import React from 'react';
import { Link } from 'react-router-dom';
import { showModal } from 'actions/modalActions';

const signUp = {
  backgroundColor: '#f36',
  borderRadius: '18px',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginLeft: '10px',
};

const signUpText = {
  color: '#fff',
  fontSize: '15px',
};

const loginText = {
  color: '#fff',
};

const NavRight = (props) => {
  return (
    <ul className="push-sm-2 col-sm-4 navbar-nav d-flex justify-content-end">
      <li className="nav-item">
        <Link to="/login" className="nav-link" style={loginText}>Login</Link>
      </li>
      <li onClick={() => props.dispatch(showModal())} className="nav-item" style={signUp}>
        <Link to="#" className="nav-link" style={signUpText}>Sign Up</Link>
      </li>
    </ul>
  );
};

export default NavRight;
