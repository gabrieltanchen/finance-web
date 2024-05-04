import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmployersEditRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return this.store.findRecord('employer', params.employer_id);
  }

  resetController(controller) {
    if (controller.employer && controller.employer.hasDirtyAttributes) {
      controller.employer.rollbackAttributes();
    }
  }
}
