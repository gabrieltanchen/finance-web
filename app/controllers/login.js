import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import LoginValidations from '../validations/login';

export default Controller.extend({
  LoginValidations,
  user: alias('model'),

  actions: {
    loggedIn() {
      this.transitionToRoute('dashboard');
    },
  },
});
