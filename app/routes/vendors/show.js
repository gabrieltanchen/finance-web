import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class VendorsShowRoute extends Route {
  @service session;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return this.store.findRecord('vendor', params.vendor_id);
  }
}
