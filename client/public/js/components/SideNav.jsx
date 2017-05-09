import React, { Component } from 'react';
import { Redirect } from 'react-router';
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
    this.state = {
      open: false,
      fireRedirect: false
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.search = this.search.bind(this);
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

  closeSideNav() {
    $('.button-collapse').sideNav('hide');
  }

  openModal() {
    return (
      <p> Hello there </p>
    );
  }

  search(event) {
    if (event.key === 'Enter') {
      console.log('Attempting to redirect');
      this.setState({ fireRedirect: true });
    }
  }

  render() {
    const { fireRedirect } = this.state;
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
              <li>
                <div className="center row">
                    <div className="col s12 " >
                      <div className="row" id="topbarsearch">
                        <div className="red-text input-field col s6 s12 ">
                          <i className="white material-icons prefix" id="searchIcon">search</i>
                          <input type="text" placeholder="search" id="autocomplete-input" className="autocomplete" onKeyPress={this.search} />
                        </div>
                      </div>
                    </div>
                  </div>
              </li>
              <li><Link to="/logout">logout</Link></li>
            </ul>
          </div>
        </nav>

        {fireRedirect && (
          <Redirect exactly to={'/search'} />
        )}

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
          <li><Link to="dashboard" onClick={this.closeSideNav} className="waves-effect" href="#!"><i className="material-icons">dashboard</i>Dashboard</Link></li>
          <li><Link to="document" onClick={this.closeSideNav} className="waves-effect" href="#!"><i className="material-icons">work</i>My Documents</Link></li>
          <li><a className="waves-effect" onClick={this.closeSideNav} href="#editModal"><i className="material-icons">mode_edit</i>Edit Profile</a></li>
        </ul>
      </div>

    );
  }
}
