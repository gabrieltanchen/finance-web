import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FundsNewRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model() {
    return this.store.createRecord('fund');
  }

  resetController(controller) {
    if (controller.fund && controller.fund.hasDirtyAttributes) {
      controller.fund.rollbackAttributes();
    }
  }
}
