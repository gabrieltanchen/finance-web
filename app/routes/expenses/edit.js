import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ExpensesEditRoute extends Route {
  @service session;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      expense: this.store.findRecord('expense', params.expense_id),
      funds: this.store.findAll('fund'),
      householdMembers: this.store.findAll('household-member'),
      subcategories: this.store.findAll('subcategory'),
      vendors: this.store.findAll('vendor'),
    });
  }

  resetController(controller) {
    if (controller.expense && controller.expense.hasDirtyAttributes) {
      controller.expense.rollbackAttributes();
    }
  }
}
