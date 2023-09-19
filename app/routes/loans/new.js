import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoansNewRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model() {
    return this.store.createRecord('loan');
  }

  resetController(controller) {
    if (controller.loan && controller.loan.hasDirtyAttributes) {
      controller.loan.rollbackAttributes();
    }
  }
}
