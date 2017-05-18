/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import jwtDecode from 'jwt-decode';
import validateInput from '../validations/signup';
import { editProfile } from '../actions/editProfile';
/**
 * @class EditProfile
 * @extends {Component}
 */
class EditProfile extends Component {
  /**
   * Creates an instance of EditProfile.
   * @param {any} props - props
   * @memberOf EditProfile
   */
  constructor(props) {
    super(props);
    const token = window.localStorage.getItem('token');
    this.user = jwtDecode(token);
    this.state = {
      firstName: this.user.firstName ? this.user.firstName : '',
      lastName: this.user.lastName ? this.user.lastName : '',
      email: this.user.email ? this.user.email : '',
      password: '',
      errors: '',
      isLoading: false,
      shouldRedirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * @param {any} event - event
   * @returns {void}
   * @memberOf EditProfile
   */
  onChange(event) {
    if (this.state.errors[event.target.name]) {
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
   * @memberOf EditProfile
   */
  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      const userId = this.user.userId;
      this.setState({ errors: {}, isLoading: true });
      this.props.editProfile(this.state, userId).then((data) => {
        const user = data.user.data;
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          shouldRedirect: true
        });
        Materialize.toast('User Updated', 4000, 'green');
        $('#EditProfile').modal('close');
      }).catch(() => {
        Materialize.toast('Oops! Something went wrong', 4000, 'red');
      });
    }
  }

  /**
 * @returns {Boolean} - True if valid. False Otherwise
 * @memberOf EditProfile
 */
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * @returns {jsx} - Edit Modal
   * @memberOf EditProfile
   */
  render() {
    const { errors, email, password, firstName, lastName } = this.state;
    return (
     this.state.shouldRedirect ?
       <Redirect exactly to={'/dashboard'} /> :
       <div className="profile">
         <h5 className="center-align"><b>Edit Profile</b></h5>
         <form className="profileForm">
           <div className="row">
             <div className="input-field col s10">
               <input
                 id="firstName"
                 type="text"
                 className="validate firstName"
                 name="firstName"
                 value={firstName}
                 onChange={this.onChange}
               />
               <label className="active" htmlFor="firstName">First Name</label>
               {errors.firstName &&
               <span className="errorMsg">{errors.firstName}</span>}
             </div>
           </div>
           <div className="row">
             <div className="input-field col s10">
               <input
                 id="lastName"
                 type="text"
                 className="validate"
                 name="lastName"
                 value={lastName}
                 onChange={this.onChange}
               />
               <label className="active" htmlFor="lastName">Last Name</label>
               {errors.lastName &&
               <span className="errorMsg">{errors.lastName}</span>}
             </div>
           </div>
           <div className="row">
             <div className="input-field col s10">
               <input
                 id="email"
                 type="email"
                 className="validate"
                 name="email"
                 value={email}
                 onChange={this.onChange}
               />
               <label className="active" htmlFor="email">Email</label>
               {errors.email &&
               <span className="errorMsg">{errors.email}</span>}
             </div>
           </div>
           <div className="row">
             <div className="input-field col s10">
               <input
                 id="password"
                 type="password"
                 className="validate"
                 name="password"
                 value={password}
                 onChange={this.onChange}
               />
               <label className="active" htmlFor="password">Password</label>
               {errors.password &&
               <span className="errorMsg">{errors.password}</span>}
             </div>
           </div>
           <div className="row">
             <div className="modal-footer">
               <input
                 id="edit-profile-btn"
                 type="submit"
                className="btn waves-effect waves-light col s10 blue darken-3" //eslint-disable-line
                 value="Submit"
                 onClick={this.onSubmit}
               />
             </div>
           </div>
         </form>
       </div>
    );
  }
}

EditProfile.propTypes = {
  editProfile: React.PropTypes.func.isRequired
};

/**
 * @param {any} state - state
 * @returns {Object} - User Object
 */
function mapStateToProps(state) {
  return {
    user: state.auth
  };
}
export default connect(mapStateToProps, { editProfile })(EditProfile);
