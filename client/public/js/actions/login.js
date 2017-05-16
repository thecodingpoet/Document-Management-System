import axios from 'axios';
import actionTypes from './actionTypes';

export const loginUser = user => ({
  type: actionTypes.LOGIN_USER,
  user
});

export const login = data => dispatch => axios.post('users/login', data)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(loginUser(response.data));
    });
