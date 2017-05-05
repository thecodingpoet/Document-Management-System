import axios from 'axios';

/**
 * This method signs up the user
 * @export
 * @param {Object} userdata - An object that contains user data
 * @returns
 */
export function userSignUpRequest(userdata) {
  return dispatch => axios.post('/users', userdata);
}
