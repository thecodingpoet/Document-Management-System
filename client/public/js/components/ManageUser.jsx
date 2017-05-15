import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ReactDOM from 'react-dom';
// import Pagination from '../components/Pagination';
import { getAllUsers, deleteUser } from '../actions/users';


require('../../scss/style.scss');



class ManageUser extends Component {

  constructor(props) {
    super(props);
    this.confirmDeletion = this.confirmDeletion.bind(this);
    this.state = {
      activePage: 15
    };
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  confirmDeletion(callback, documentId) {
    swal({
      title: 'Are you sure?',
      text: 'Would you like to delete this document?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      closeOnConfirm: false,
      closeOnCancel: false
    },
    (deletionConfirmed) => {
      if (deletionConfirmed) {
        callback(documentId);
        swal('Deleted!', 'User has been deleted.', 'success');
      } else {
        swal('Cancelled!', 'User has not been deleted.', 'error');
      }
    });
  };
  /**
   * @returns
   * @memberOf ManageUser
   */
  render() {
    const usersList = this.props.users;
    return (
      <div className="container" id="usersTable">
        <h5><b>Manage Users</b></h5>
        <table className="striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              usersList.map(user => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.roleId === 1 ? 'Admin' : 'Regular' }</td>
                  <td>
                    <a
                      href="#!"
                      onClick={(event) => {
                        event.preventDefault();
                        return this.confirmDeletion(this.props.deleteUser, user.id);
                      }
                    } ><img src={require('../../images/admin_delete.png')} alt="delete user logo" id="deleteIcon" /></a></td>
                </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

ManageUser.propTypes = {
  users: React.PropTypes.array.isRequired,
  getAllUsers: React.PropTypes.func.isRequired,
  deleteUser: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getAllUsers, deleteUser })(ManageUser);
