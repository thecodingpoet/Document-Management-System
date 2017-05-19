import axios from 'axios';
import actionTypes from './actionTypes';


export /**
 * @param {any} users - users
 * @param {any} pages - pages
 * @returns {Object} - object containing action type,
 * users and pages
 */
const getAllUsersSuccess = (users, pages) => ({
  type: actionTypes.GET_ALL_USERS,
  users,
  pages
});

export /**
 * @param {any} id - user id
 * @returns {Object} - object containing action type
 * and user id
 */
const userDeleted = id => ({
  type: actionTypes.DELETE_USER_SUCCESS,
  id
});

export
/**
 * @param {any} offset - users
 * @returns {any} - dispatches get all users success
 */
const getAllUsers = (offset) => {
  if (!offset) {
    offset = 0;
  }
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    return axios.get(`/users?offset=${offset}`, {
      headers: {
        authorization: token
      }
    })
    .then(users => dispatch(
      getAllUsersSuccess(users.data.users, users.data.pages)));
  };
};

export
/**
 * @param {any} id - user id
 * @returns {any} - dispatches user deleted success
 */
const deleteUser = id => (dispatch) => {
  const token = window.localStorage.getItem('token');
  return axios.delete(`/users/${id}`, {
    headers: {
      authorization: token
    }
  }).then(() => dispatch(userDeleted(id)));
};
