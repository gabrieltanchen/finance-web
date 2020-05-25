import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class VendorsNewRoute extends Route {
  @service session;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model() {
    return this.store.createRecord('vendor');
  }

  resetController(controller) {
    if (controller.vendor && controller.vendor.hasDirtyAttributes) {
      controller.vendor.rollbackAttributes();
    }
  }
}
