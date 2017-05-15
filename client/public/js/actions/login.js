import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';


export function loginUser(user) {
  return {
    type: 'LOGIN_USER',
    user
  };
}

/**
 * This method performs login action
 * @export
 * @param {Object} data - An object that consist of the email and password
 * @returns
 */
export function login(data) {
  return dispatch => axios.post('users/login', data)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(loginUser(response.data));
    });
}
