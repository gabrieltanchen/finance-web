import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class SubcategoriesBudgetsRoute extends Route {
  @service router;
  @service session;
  @service store;

  queryParams = {
    page: {
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
      budgets: this.store.query('budget', {
        page: params.page,
        subcategory_id: params.subcategory_id,
      }),
      subcategory: this.store.findRecord('subcategory', params.subcategory_id),
    });
  }
}
