import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DepositsShowRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return this.store.findRecord('deposit', params.deposit_id);
  }
}
