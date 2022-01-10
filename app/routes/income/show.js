import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IncomeShowRoute extends Route {
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return this.store.findRecord('income', params.income_id);
  }
}
