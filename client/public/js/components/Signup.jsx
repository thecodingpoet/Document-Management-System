/* eslint-disable no-undef */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { userSignUpRequest } from '../actions/signup';
import validateInput from '../validations/signup';

/**
 * @class Signup
 * @extends {Component}
 */
class Signup extends Component {
  /**
   * Creates an instance of Signup.
   * @param {any} props - props
   * @memberOf Signup
   */
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: '',
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * @param {any} event - event
   * @returns {void}
   * @memberOf Signup
   */
  onChange(event) {
    if (!!this.state.errors[event.target.name]) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  /**
   * @param {any} event - event
   * @returns {void}
   * @memberOf Signup
   */
  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignUpRequest(this.state).then(() => {
        this.setState({ shouldRedirect: true });
      }).catch((err) => {
        Materialize.toast(err.response.data[0].message, 4000, 'red');
        this.setState({ isLoading: false });
      });
    }
  }

  /**
   * @returns {Boolean} - True if valid. False otherwise
   * @memberOf Signup
   */
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * @returns { jsx } - Signup Page
   * @memberOf Signup
   */
  render() {
    const { errors, email, password, firstName, lastName, isLoading }
    = this.state;
    return (
      this.state.shouldRedirect ?
        <Redirect to={'/dashboard'} /> :
        <div className="container row divBox" id="signUpBox" >
          <h4 className="center-align"><b>Create Your Account</b></h4>
          <form action="" onSubmit={this.onSubmit} className="col s12">
            <div className="row">
              <div className="input-field offset-s2 col s8">
                <input
                  id="firstName"
                  type="text"
                  className="validate"
                  name="firstName"
                  value={firstName}
                  onChange={this.onChange}
                />
                <label htmlFor="firstName">First Name</label>
                {errors.firstName &&
                  <span className="errorMsg">{errors.firstName}</span>}
              </div>
            </div>
            <div className="row">
              <div className="input-field offset-s2 col s8">
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  name="lastName"
                  value={lastName}
                  onChange={this.onChange}
                />
                <label htmlFor="lastName">Last Name</label>
                {errors.lastName &&
                  <span className="errorMsg">{errors.lastName}</span>}
              </div>
            </div>
            <div className="row">
              <div className="input-field offset-s2 col s8">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
                <label htmlFor="email">Email</label>
                {errors.email &&
                  <span className="errorMsg">{errors.email}</span>}
              </div>
            </div>
            <div className="row">
              <div className="input-field offset-s2 col s8">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                />
                <label htmlFor="password">Password</label>
                {errors.password &&
                  <span className="errorMsg">{errors.password}</span>}
              </div>
            </div>
            <div className="row">
              <button
                className="btn waves-effect waves-light offset-s2 col s8 blue darken-3" //eslint-disable-line
                type="submit"
                name="action"
                disabled={isLoading}
              >Sign Up
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
    );
  }
}

Signup.propTypes = {
  userSignUpRequest: React.PropTypes.func.isRequired
};

export default connect(null, { userSignUpRequest })(Signup);
