import axios from 'axios';

export const SIGN_UP_USER = 'SIGN_UP_USER';

export function signUpUser(user) {
  return {
    type: 'SIGN_UP_USER',
    user
  };
}

/**
 * This method signs up the user
 * @export
 * @param {Object} user - An object that contains user data
 * @returns {any} - dipatches sign up user action
 */
export function userSignUpRequest(user) {
  return dispatch => axios.post('/users', user)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(signUpUser(response.data));
    });
}
