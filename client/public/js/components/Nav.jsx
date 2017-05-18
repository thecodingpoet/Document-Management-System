import React from 'react';
import { Link } from 'react-router-dom';
import navIcon from '../../images/icon.png';

const Nav = () => (
  <nav>
    <div className="nav-wrapper grey darken-4">
      <Link to="/" className="brand-logo">
        <img src={navIcon} alt="logo" id="icon" />
      </Link>
      <span id="logo_title">
        Document Management System
      </span>

      <ul className="right hide-on-med-and-down">
        <li><Link to="/login">login</Link></li>
        <li><Link to="/signup">signup</Link></li>
      </ul>
    </div>
  </nav>
  );

export default Nav;
