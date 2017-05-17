import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/logout';



/**
 * @export
 * @class Nav
 * @extends {Component}
 */
class Nav extends Component {
  /**
   * Creates an instance of Nav.
   * @param {any} props - props
   * @memberOf Nav
   */
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      shouldRedirect: false
    };
  }
  /**
   * @param {any} event - event
   * @returns {void}
   * @memberOf MySideNav
   */
  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.setState({ shouldRedirect: true });
  }

  /**
   * @returns {jsx} - Nav
   * @memberOf Nav
   */
  render() {
    return (
    this.state.shouldRedirect ?
      <Redirect exactly to={'/'} /> :
      <nav>
        <div className="nav-wrapper grey darken-4">
          <span id="logo_title">
            Document Management System
          </span>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/" onClick={this.logout}>logout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  logout: React.PropTypes.func.isRequired
};

/**
 * @param {any} state - state
 * @returns {Object} - user data
 */
function mapStateToProps(state) {
  return {
    user: state.auth
  };
}
export default connect(mapStateToProps, { logout })(Nav);
