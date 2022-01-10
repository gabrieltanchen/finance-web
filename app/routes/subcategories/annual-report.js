import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class SubcategoriesAnnualReportRoute extends Route {
  @service session;
  @service store;
  queryParams = {
    year: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      annualReport: this.store.findRecord('subcategory-annual-report', `${params.subcategory_id}-${params.year}`),
      subcategory: this.store.findRecord('subcategory', params.subcategory_id),
    });
  }
}
