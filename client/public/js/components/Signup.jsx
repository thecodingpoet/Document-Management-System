import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { userSignUpRequest } from '../actions/signup';
import validateInput from '../validations/signup';

require('../../scss/style.scss');

class Signup extends Component {
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

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onChange(e) {
    if (!!this.state.errors[e.target.name]) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignUpRequest(this.state).then((response) => {
        window.localStorage.setItem('firstName', response.data.firstName);
        window.localStorage.setItem('lastName', response.data.lastName);
        window.localStorage.setItem('email', response.data.email);
        window.localStorage.setItem('token', response.data.token);
        window.localStorage.setItem('userId', response.data.id);
        this.setState({ shouldRedirect: true });
      }).catch((error) => {
        this.setState({ errors: error.response.data, isLoading: false });
      });
    }
  }

  render() {
    const { errors, email, password, firstName, lastName, isLoading } = this.state;
    return (
      this.state.shouldRedirect ?
        <Redirect to={'/dashboard'} /> :
        <div className="container row divBox" id="signUpBox" >
          <form action="" onSubmit={this.onSubmit} className="col s12">
            <div className="row">
              <div className="input-field offset-s3 col s6">
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
              <div className="input-field offset-s3 col s6">
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
              <div className="input-field offset-s3 col s6">
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
              <div className="input-field offset-s3 col s6">
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
                className="btn waves-effect waves-light offset-s3 col s6 blue darken-3"
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
