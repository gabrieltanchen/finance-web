import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class UsersEditController extends Controller {
  @alias('model') user;

  @action
  transitionToUserDetails() {
    this.transitionToRoute('users.show', this.user.id);
  }
}
