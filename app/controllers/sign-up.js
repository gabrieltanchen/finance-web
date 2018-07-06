import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import SignUpValidations from '../validations/sign-up';

export default Controller.extend({
  user: alias('model'),
  SignUpValidations,
});
