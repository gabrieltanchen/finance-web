import {
  validateFormat,
  validateLength,
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  email: [
    validateFormat({
      type: 'email',
    }),
    validatePresence(true),
  ],
  firstName: validatePresence(true),
  lastName: validatePresence(true),
  password: [
    validateLength({
      min: 8,
    }),
    validatePresence(true),
  ],
};
