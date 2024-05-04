import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmployersNewRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model() {
    return this.store.createRecord('employer');
  }

  resetController(controller) {
    if (controller.employer && controller.employer.hasDirtyAttributes) {
      controller.employer.rollbackAttributes();
    }
  }
}
