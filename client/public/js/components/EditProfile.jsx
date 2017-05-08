import React, { Component } from 'react';
import { connect } from 'react-redux';
import validateInput from '../validations/signup';
import { editProfile } from '../actions/editProfile';

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: window.localStorage.firstName ? window.localStorage.firstName : '',
      lastName: window.localStorage.lastName ? window.localStorage.lastName : '',
      email: window.localStorage.email ? window.localStorage.email : '',
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

  onSubmit(event) {
    // event.preventDefault();
    if (this.isValid()) {
      const userId = window.localStorage.userId;
      this.setState({ errors: {}, isLoading: true });
      this.props.editProfile(this.state, userId).then((data) => {
        const user = data.user.data;
        window.localStorage.setItem('firstName', user.firstName);
        window.localStorage.setItem('lastName', user.lastName);
        window.localStorage.setItem('email', user.email);
      });
    }
  }

  render() {
    const { errors, email, password, firstName, lastName } = this.state;
    return (
      <div id="editModal" className="modal">
        <div className="modal-content">
          <h5>Edit Profile</h5>
          <form>
            <div className="row">
              <div className="input-field col s12">
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
              <div className="input-field col s12">
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
              <div className="input-field col s12">
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
              <div className="input-field col s12">
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
              <div className="modal-footer">
                <a
                  className="modal-action modal-close waves-effect waves-green btn-flat"
                >Cancel</a>
                <input
                  type="submit"
                  className="modal-action waves-effect waves-green btn-flat"
                  value="Submit"
                  onClick={this.onSubmit}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

EditModal.propTypes = {
  editProfile: React.PropTypes.func.isRequired
};

export default connect(null, { editProfile })(EditModal);
