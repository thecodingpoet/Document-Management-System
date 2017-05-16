import axios from 'axios';
import actionTypes from './actionTypes';

export const signUpUser = user => ({
  type: actionTypes.SIGN_UP_USER,
  user
});

export const userSignUpRequest = user => dispatch => axios.post('/users', user)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(signUpUser(response.data));
    });
