import axios from 'axios';
import actionTypes from './actionTypes';

export /**
 * @param {any} user - user
 * @returns {Object} Object containing action type and user
 */
const signUpUser = user => ({
  type: actionTypes.SIGN_UP_USER,
  user
});

export
/**
 * @param {any} user - user
 * @returns {any} - dispatches sign up user action
 */
const userSignUpRequest = user => dispatch => axios.post('/users', user)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(signUpUser(response.data));
    });
