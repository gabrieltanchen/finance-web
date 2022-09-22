import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class VendorsEditRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return this.store.findRecord('vendor', params.vendor_id);
  }

  resetController(controller) {
    if (controller.vendor && controller.vendor.hasDirtyAttributes) {
      controller.vendor.rollbackAttributes();
    }
  }
}
