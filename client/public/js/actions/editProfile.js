import axios from 'axios';
import actionTypes from './actionTypes';

export /**
 * user updated action
 * @param {any} user - user
 * @returns {Object} - Object containing action type and user
 */
const userUpdated = user => ({
  type: actionTypes.USER_UPDATED,
  user,
});

export /**
 * @param {any} userData - user data
 * @param {any} userId - user id
 * @returns {any} - dispatches user updated action
 */
const editProfile = (userData, userId) => (dispatch) => {
  const token = window.localStorage.getItem('token');
  return axios.put(`/users/${userId}`, userData, {
    headers: {
      Authorization: token
    }
  }).then(data => dispatch(userUpdated(data)));
};
