import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExpensesShowRoute extends Route {
  @service session;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return this.store.findRecord('expense', params.expense_id);
  }
}
