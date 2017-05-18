import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Dashboard from './Dashboard.jsx';
import Footer from './Footer.jsx';
import SideNav from './SideNav.jsx';
import Nav from './Nav.jsx';
import NavBar from './NavBar.jsx';
import MyDocuments from './MyDocuments.jsx';
import FullDocument from './FullDocument.jsx';
import Search from './Search.jsx';
import ManageUser from './ManageUser.jsx';

require('../../scss/style.scss');


/**
 * @export
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  /**
   * @returns {jsx} - App component
   * @memberOf App
   */
  render() {
    this.props = {};
    if (window.localStorage.getItem('token')) {
      return (
        <div>
          <div className="row">
            <div className="col s2">
              <SideNav />
            </div>
            <div className="col s10" id="contentDiv">
              <div className="content">
                <NavBar />
                <Switch>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route exact path="/document" component={MyDocuments} />
                  <Route path="/document/:id" component={FullDocument} />
                  <Route path="/search" component={Search} />
                  <Route path="/manage" component={ManageUser} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="content">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
