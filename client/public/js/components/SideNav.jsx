import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Avatar from 'react-avatar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { logout } from '../actions/logout';

require('../../scss/style.scss');

injectTapEventPlugin();

class MySideNav extends Component {

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
    this.search = this.search.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  closeSideNav() {
    $('.button-collapse').sideNav('hide');
  }

  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.setState({ redirectTo: '/' });
  }

  search(event) {
    if (event.key === 'Enter') {
      this.setState({ fireRedirect: true });
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper grey darken-4">

            <li className="brand-logo">
              <img src={require('../../images/menu_icon.png')} data-activates="slide-out" className="button-collapse" alt="logo" id="menu_icon" onClick={this.handleToggle} />
            </li>
            <span id="side_title">
              Document Management System
            </span>

            <ul className="right hide-on-med-and-down">
              <li onClick={this.logout}><Link to="/">logout</Link></li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="side-nav">
          <li><div className="userView">
            <div className="background">
              <img src={require('../../images/sidenav.jpg')} />
            </div>
            <div id="avatar">
              <Avatar name={this.name} color="#b71c1c" round />
            </div>
            <span className="white-text name">{this.name}</span>
            <span className="white-text email">{this.email}</span>
          </div></li>
          <li><Link to="/dashboard" onClick={this.closeSideNav} className="waves-effect" href="#!"><i className="material-icons">dashboard</i>Dashboard</Link></li>
          <li><Link to="/document" onClick={this.closeSideNav} className="waves-effect" href="#!"><i className="material-icons">work</i>My Documents</Link></li>
          <li><Link to="/search" onClick={this.closeSideNav} className="waves-effect" href="#!"><i className="material-icons">search</i>Search Documents</Link></li>
          { Number(this.roleId) === 1
            ? <li ><Link to="manage" className="waves-effect" onClick={this.closeSideNav} href="#!"><i className="material-icons">supervisor_account</i>Manage User</Link></li>
            : ''
          }
          <li><a className="waves-effect" onClick={this.closeSideNav} href="#editModal"><i className="material-icons">mode_edit</i>Edit Profile</a></li>
        </ul>
      </div>

    );
  }
}

MySideNav.propTypes = {
  logout: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.auth
  };
}
export default connect(mapStateToProps, { logout })(MySideNav);
