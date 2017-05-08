import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('../../scss/style.scss');

injectTapEventPlugin();

export default class MySideNav extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    const firstName = window.localStorage.getItem('firstName');
    const lastName = window.localStorage.getItem('lastName');
    this.name = `${firstName}  ${lastName}`;
    this.email = window.localStorage.getItem('email');
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

  openModal() {
    return (
      <p> Hello there </p>
    );
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
              <li><Link to="/signup"><i className="large material-icons" /></Link></li>
              <li><Link to="/login">logout</Link></li>
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
        <li><Link to="dashboard" className="waves-effect" href="#!"><i className="material-icons">dashboard</i>Dashboard</Link></li>
          <li><Link to="document" className="waves-effect" href="#!"><i className="material-icons">work</i>My Documents</Link></li>
          <li><a className="waves-effect" href="#!"> <i className="material-icons">search</i>Search Documents</a></li>
          <li><a className="waves-effect" href="#editModal"><i className="material-icons">mode_edit</i>Edit Profile</a></li>
        </ul>
      </div>

    );
  }
}
