import axios from 'axios';

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
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  };
}
