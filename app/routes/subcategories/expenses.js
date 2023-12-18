import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class SubcategoriesExpensesRoute extends Route {
  @service router;
  @service session;
  @service store;

  queryParams = {
    page: {
      refreshModel: true,
    },
    sort: {
      refreshModel: true,
    },
    sortDirection: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      expenses: this.store.query('expense', {
        page: params.page,
        subcategory_id: params.subcategory_id,
        sort: params.sort,
        sortDirection: params.sortDirection,
      }),
      subcategory: this.store.findRecord('subcategory', params.subcategory_id),
    });
  }
}
