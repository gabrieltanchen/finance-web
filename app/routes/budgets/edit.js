import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class BudgetsEditRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      budget: this.store.findRecord('budget', params.budget_id),
      subcategories: this.store.findAll('subcategory'),
    });
  }

  resetController(controller) {
    if (controller.budget && controller.budget.hasDirtyAttributes) {
      controller.budget.rollbackAttributes();
    }
  }
}
