import axios from 'axios';
import actionTypes from './actionTypes';


export const getAllUsersSuccess = (users, pages) => ({
  type: actionTypes.GET_ALL_USERS,
  users,
  pages
});

export const userDeleted = id => ({
  type: actionTypes.DELETE_USER_SUCCESS,
  id
});

export const getAllUsers = (offset) => {
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

export const deleteUser = id => (dispatch) => {
  const token = window.localStorage.getItem('token');
  return axios.delete(`/users/${id}`, {
    headers: {
      authorization: token
    }
  }).then(() => dispatch(userDeleted(id)));
};
