import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  const errors = {}; 

  if (validator.isEmpty(data.title)) {
    errors.title = 'This Field is required';
  }

  if (validator.isEmpty(data.content)) {
    errors.content = 'This Field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}


