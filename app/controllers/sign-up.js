import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import SignUpValidations from '../validations/sign-up';

export default Controller.extend({
  actions: {
    userCreated(userId, userToken) {
      this.get('session').setToken(userId, userToken);
      this.transitionToRoute('index');
    },
  },
  session: service(),
  user: alias('model'),
  SignUpValidations,
});
