import axios from 'axios';

export const USER_UPDATED = 'USER_UPDATED';

/**
 * userUpdated
 * @export
 * @param {any} user
 * @returns {object} object
 */
export function userUpdated(user) {
  return {
    type: USER_UPDATED,
    user,
  };
}

/**
 * @export
 * @param {Object} userData - An object that contains user data
 * @param {Integer} userId - The id of the user
 * @returns {}
 */
export function editProfile(userData, userId) {
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    return axios.put(`/users/${userId}`, userData, {
      headers: {
        Authorization: token
      }
    }).then(data => dispatch(userUpdated(data)));
  };
}
