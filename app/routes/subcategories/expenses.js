import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class SubcategoriesExpensesRoute extends Route {
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
    return RSVP.hash({
      expenses: this.store.query('expense', {
        page: params.page,
        subcategory_id: params.subcategory_id,
      }),
      subcategory: this.store.findRecord('subcategory', params.subcategory_id),
    });
  }
}
