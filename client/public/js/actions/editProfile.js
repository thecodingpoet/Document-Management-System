import axios from 'axios';
import actionTypes from './actionTypes';

export const userUpdated = user => ({
  type: actionTypes.USER_UPDATED,
  user,
});

export const editProfile = (userData, userId) => (dispatch) => {
  const token = window.localStorage.getItem('token');
  return axios.put(`/users/${userId}`, userData, {
    headers: {
      Authorization: token
    }
  }).then(data => dispatch(userUpdated(data)));
};
