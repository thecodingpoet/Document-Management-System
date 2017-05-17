/* eslint-disable no-undef */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'react-materialize';
import { getAllUsers, deleteUser } from '../actions/users';
import DeleteIcon from '../../images/admin_delete.png';

/**
 * @class ManageUser
 * @extends {Component}
 */
class ManageUser extends Component {

  /**
   * Creates an instance of ManageUser.
   * @param {any} props - props
   * @memberOf ManageUser
   */
  constructor(props) {
    super(props);
    this.confirmDeletion = this.confirmDeletion.bind(this);
  }

  /**
   * This method gets called before the initial render
   * @memberOf ManageUser
   * @returns {void}
   */
  componentDidMount() {
    this.props.getAllUsers();
  }

  /**
   * @param {any} callback - functon that gets called
   * for a sussessful response
   * @param {any} documentId
   * @returns {void}
   * @memberOf ManageUser
   */
  confirmDeletion(callback, documentId) {
    swal({
      title: 'Are you sure?',
      text: 'Would you like to delete this user?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete!',
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
  }

  /**
   * @returns {jsx} - Manage User Page
   * @memberOf ManageUser
   */
  render() {
    let usersList = [];
    if (this.props.users.users !== undefined) {
      usersList = this.props.users.users;
    }
    return (
      <div className="container" id="usersTable">
        <h5><b>Manage Users</b></h5>
        <center>
          <Pagination
            items={this.props.users.pages}
            maxButtons={8}
            onSelect={(page) => {
              const offset = (page - 1) * 10;
              this.props.getAllUsers(offset);
            }}
          />
        </center>
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
                    {user.roleId !== 1
                    ?
                      <a
                        href="#!"
                        onClick={(event) => {
                          event.preventDefault();
                          return this
                        .confirmDeletion(this.props.deleteUser, user.id);
                        }
                    }
                      ><img
                        src={DeleteIcon}
                        alt="delete user logo"
                        id="deleteIcon"
                      />
                      </a> : ''}</td>


                </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

/**
 * @param {any} state - state
 * @returns {jsx} - manage user
 */
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

export default connect(mapStateToProps,
{ getAllUsers, deleteUser })(ManageUser);
