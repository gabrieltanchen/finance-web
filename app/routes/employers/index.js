import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmployersIndexRoute extends Route {
  @service router;
  @service session;
  @service store;

  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return this.store.query('employer', params);
  }
}
