import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import SignUpValidations from '../validations/sign-up';

export default Controller.extend({
  session: service(),

  SignUpValidations,
  user: alias('model'),

  actions: {
    userCreated(userId, userToken) {
      get(this, 'session').setToken(userId, userToken);
      this.transitionToRoute('index');
    },
  },
});
