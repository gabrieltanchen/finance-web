import {
  validateNumber,
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  budget: [
    validateNumber({
      gte: 0,
    }),
    validatePresence(true),
  ],
  month: [
    validateNumber({
      lte: 11,
      gte: 0,
    }),
    validatePresence(true),
  ],
  year: [
    validateNumber({
      lte: 2050,
      gte: 2000,
    }),
    validatePresence(true),
  ],
};
