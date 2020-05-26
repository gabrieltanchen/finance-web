import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HouseholdMembersIndexRoute extends Route {
  @service session;

  queryParams = {
    page: {
      refreshModel: true,
    },
  }

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return this.store.query('household-member', params);
  }
}
