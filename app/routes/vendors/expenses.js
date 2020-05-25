import Route from '@ember/routing/route';
import RSVP from 'rsvp';

import { inject as service } from '@ember/service';

export default class VendorsExpensesRoute extends Route {
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
        vendor_id: params.vendor_id,
      }),
      vendor: this.store.findRecord('vendor', params.vendor_id),
    });
  }
}
