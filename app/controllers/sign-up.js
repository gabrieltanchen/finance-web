import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class SignUpController extends Controller {
  @service router;
  @service session;
  @alias('model') user;

  @action
  transitionToDashboard() {
    this.session.loginWithToken(this.user.token);
    this.router.transitionTo('dashboard');
  }
}
