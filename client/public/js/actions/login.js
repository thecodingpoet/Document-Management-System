import axios from 'axios';

/**
 * This method performs login action
 * @export
 * @param {Object} data - An object that consist of the email and password
 * @returns
 */
export function login(data) {
  return dispatch => axios.post('users/login', data);
}
