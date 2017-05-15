import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import validateInput from '../validations/signup';
import { editProfile } from '../actions/editProfile';

class EditModal extends Component {
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
    event.preventDefault();
    if (this.isValid()) {
      const userId = this.user.userId;
      this.setState({ errors: {}, isLoading: true });
      this.props.editProfile(this.state, userId).then((data) => {
        const user = data.user.data;
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        });
        $('#editModal').modal('close');
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
  user: React.PropTypes.object.isRequired,
  editProfile: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.auth
  };
}
export default connect(mapStateToProps, { editProfile })(EditModal);
