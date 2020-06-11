import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class SubcategoriesAnnualReportRoute extends Route {
  @service session;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      annualReports: this.store.query('subcategory-annual-report', {
        subcategory_id: params.subcategory_id,
      }),
      subcategory: this.store.findRecord('subcategory', params.subcategory_id),
    });
  }
}
