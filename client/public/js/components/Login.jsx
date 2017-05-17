/* eslint-disable no-undef */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import validateInput from '../validations/login';
import { login } from '../actions/login';

/**
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
  /**
   * Creates an instance of Login.
   * @param {any} props
   * @memberOf Login
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }



  /**
   * @param {any} event
   * @returns {void}
   * @memberOf Login
   */
  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        () => {
          this.setState({ shouldRedirect: true });
        }
      ).catch(() => {
        Materialize.toast('Incorrect Username or password', 4000, 'red');
        this.setState({ isLoading: false });
      });
    }
  }

  /**
   * @param {any} event - event
   * @returns {void}
   * @memberOf Login
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
   * @returns {Boolean} - True if valid. False otherwise
   * @memberOf Login
   */
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * @returns {jsx} - Login Page
   * @memberOf Login
   */
  render() {
    const { errors, email, password, isLoading } = this.state;
    return (
      this.state.shouldRedirect ?
        <Redirect exactly to={'/dashboard'} /> :
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="container divBox" id="loginBox">
              <div className="row">
                <div className="input-field offset-s3 col s6">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="validate"
                    value={email}
                    onChange={this.onChange}
                  />
                  <label htmlFor="email">Email</label>
                  {errors.email &&
                    <span className="errorMsg">{errors.email}</span>}
                </div>
              </div>
              <div className="row">
                <div className="input-field offset-s3 col s6">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="validate"
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
                  className="btn waves-effect waves-light offset-s3 col s6 blue darken-3"
                  type="submit"
                  name="action"
                  disabled={isLoading}
                >Log in
              <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default connect(null, { login })(Login);
