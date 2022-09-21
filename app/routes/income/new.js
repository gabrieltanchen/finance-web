import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class IncomeNewRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model() {
    return RSVP.hash({
      householdMembers: this.store.findAll('household-member'),
      income: this.store.createRecord('income'),
    });
  }

  resetController(controller) {
    if (controller.income && controller.income.hasDirtyAttributes) {
      controller.income.rollbackAttributes();
    }
  }
}
