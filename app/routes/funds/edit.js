import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FundsEditRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return this.store.findRecord('fund', params.fund_id);
  }

  resetController(controller) {
    if (controller.fund && controller.fund.hasDirtyAttributes) {
      controller.fund.rollbackAttributes();
    }
  }
}
