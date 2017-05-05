import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

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
