import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class IncomeEditRoute extends Route {
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      householdMembers: this.store.findAll('household-member'),
      income: this.store.findRecord('income', params.income_id),
    });
  }

  resetController(controller) {
    if (controller.income && controller.income.hasDirtyAttributes) {
      controller.income.rollbackAttributes();
    }
  }
}
