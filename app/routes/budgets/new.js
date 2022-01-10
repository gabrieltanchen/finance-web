import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class BudgetsNewRoute extends Route {
  @service session;
  @service store;
  queryParams = {
    subcategoryId: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  async model(params) {
    const budget = this.store.createRecord('budget');
    if (params.subcategoryId) {
      const subcategory = await this.store.findRecord('subcategory', params.subcategoryId);
      budget.subcategory = subcategory;
    }
    return RSVP.hash({
      budget,
      subcategories: this.store.findAll('subcategory'),
    });
  }

  resetController(controller) {
    if (controller.budget && controller.budget.hasDirtyAttributes) {
      controller.budget.rollbackAttributes();
    }
  }
}
