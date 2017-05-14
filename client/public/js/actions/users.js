import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

/**
 * This method dispatches the delete document action
 * @export
 * @returns 
 */
export function getAllUsersSuccess(users) {
  return {
    type: GET_ALL_USERS,
    users
  };
}

/**
 * This method dispatches the delete document action
 * @export
 * @returns 
 */
export function userDeleted(id) {
  return {
    type: DELETE_USER_SUCCESS,
    id
  };
}

/**
 * This method dispatches a method to fetch all documents
 * @export
 * @returns {Object} - An object that consist of the type
 * of the document and the action
 */
export function getAllUsers() {
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    return axios.get('/users', {
      headers: {
        authorization: token
      }
    })
    .then(users => dispatch(getAllUsersSuccess(users.data.users)));
  };
}

/**
 * This method dispatches a delete document action
 * @export
 * @param {Integer} userId
 * @returns {Object} - An object that consist of the type
 * of the document and the action
 */
export function deleteUser(id) {
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    return axios.delete(`/users/${id}`, {
      headers: {
        authorization: token
      }
    }).then(data  => dispatch(userDeleted(id)))
    .catch((err) => {
      // An error occurred.....
    });
  };
}
