import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

/**
 * Validate input function
 * @export
 * @param {any} data - input data
 * @returns {Object} - Object consisting of errors object and boolean
 * to indicate if input is valid
 */
export default function validateInput(data) {
  const errors = {};

  if (validator.isEmpty(data.firstName)) {
    errors.firstName = 'This Field is required';
  }

  if (validator.isEmpty(data.lastName)) {
    errors.lastName = 'This Field is required';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'This Field is required';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'This Field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
