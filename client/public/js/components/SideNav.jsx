/* eslint-disable no-undef */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Avatar from 'react-avatar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { logout } from '../actions/logout';
import sideNavImage from '../../images/rain.jpg';

require('../../scss/style.scss');

injectTapEventPlugin();

/**
 * @class MySideNav
 * @extends {Component}
 */
class MySideNav extends Component {

  /**
   * Creates an instance of MySideNav.
   * @param {any} props - props
   * @memberOf MySideNav
   */
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      fireRedirect: false
    };

    const token = window.localStorage.getItem('token');
    this.user = jwtDecode(token);
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.name = `${this.firstName}  ${this.lastName}`;
    this.email = this.user.email;
    this.roleId = this.user.roleId;

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  /**
   * @returns {void}
   * @memberOf MySideNav
   */
  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  /**
   * @returns {void}
   * @memberOf MySideNav
   */
  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  /**
   * @returns {void}
   * @memberOf MySideNav
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * @returns {void}
   * @memberOf MySideNav
   */
  closeSideNav() {
    $('.button-collapse').sideNav('hide');
  }

  /**
   * @returns {jsx} - Side Nav
   * @memberOf MySideNav
   */
  render() {
    return (
      <ul id="slide-out" className="side-nav fixed">
        <li><div className="userView">
          <div className="background">
            <img src={sideNavImage} alt="Background" id="sideNavImage" />
          </div>
          <div id="avatar">
            <Avatar name={this.name} color="#b71c1c" round />
          </div>
          <span className="white-text name">{this.name}</span>
          <span className="white-text email">{this.email}</span>
        </div></li>
        <li><Link
          to="/dashboard"
          onClick={this.closeSideNav}
          className="waves-effect" href="#!"
        ><i className="material-icons">dashboard</i>Dashboard</Link>
        </li>
        <li><Link
          to="/document"
          onClick={this.closeSideNav}
          className="waves-effect" href="#!"
        >
          <i className="material-icons">work</i>My Documents</Link>
        </li>
        <li><Link
          to="/search"
          onClick={this.closeSideNav}
          className="waves-effect" href="#!"
        ><i className="material-icons">search</i>Search Documents</Link>
        </li>
        { Number(this.roleId) === 1
          ? <li ><Link
            to="manage"
            className="waves-effect"
            onClick={this.closeSideNav} href="#!"
          >
            <i className="material-icons">supervisor_account</i>Manage User
            </Link>
          </li>
          : ''
        }
        <li>
          <a
            className="waves-effect"
            onClick={this.closeSideNav}
            href="#editModal"
          >
            <i className="material-icons">mode_edit</i>Edit Profile
            </a>
        </li>
      </ul>

    );
  }
}

MySideNav.propTypes = {
  logout: React.PropTypes.func.isRequired
};

/**
 * @param {any} state - state
 * @returns {Object} - users data
 */
function mapStateToProps(state) {
  return {
    user: state.auth
  };
}
export default connect(mapStateToProps, { logout })(MySideNav);
