import axios from 'axios';
import actionTypes from './actionTypes';

export /**
 * @param {any} user - user
 * @returns {Object} - Object containing action type and user
 */
const loginUser = user => ({
  type: actionTypes.LOGIN_USER,
  user
});

export /**
 * @param {any} data - user data
 * @returns {any} - dispatches login user action
 */
const login = data => dispatch => axios.post('users/login', data)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(loginUser(response.data));
    });
