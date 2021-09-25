import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersNewRoute extends Route {
  @service session;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model() {
    return this.store.createRecord('user');
  }

  resetController(controller) {
    if (controller.user && controller.user.hasDirtyAttributes) {
      controller.user.rollbackAttributes();
    }
  }
}
