import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class UsersEditController extends Controller {
  @service router;
  @alias('model') user;

  @action
  transitionToUserDetails() {
    this.router.transitionTo('users.show', this.user.id);
  }
}
