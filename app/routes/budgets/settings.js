import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BudgetsSettingsRoute extends Route {
  @service session;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return this.store.findRecord('budget', params.budget_id);
  }
}
