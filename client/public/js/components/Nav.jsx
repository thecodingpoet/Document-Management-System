import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-4">
          <Link to="/" className="brand-logo">
            <img src={require('../../images/icon.png')} alt="logo" id="icon" />
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
  }
}
