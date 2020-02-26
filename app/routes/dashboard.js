import { get } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  session: service(),
  queryParams: {
    month: {
      refreshModel: true,
    },
    year: {
      refreshModel: true,
    },
  },

  async beforeModel() {
    if (!(await get(this, 'session').isLoggedIn())) {
      this.transitionTo('login');
    }
  },

  model(params) {
    return RSVP.hash({
      budgetReports: this.store.query('budget-report', params),
      monthlyReport: get(this, 'store').findRecord('monthly-report', `${params.year}-${params.month}`),
    });
  },
});
