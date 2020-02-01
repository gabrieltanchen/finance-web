import {
  validateNumber,
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  amount: [
    validateNumber({
      gte: 0,
    }),
    validatePresence(true),
  ],
  date: [
    validatePresence(true),
  ],
};
