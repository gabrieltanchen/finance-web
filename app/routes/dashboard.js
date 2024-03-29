import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class DashboardRoute extends Route {
  @service router;
  @service session;
  @service store;

  queryParams = {
    month: {
      refreshModel: true,
    },
    year: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    const months = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ];
    return RSVP.hash({
      budgetReports: this.store.query('budget-report', {
        month: months.indexOf((params.month).toLowerCase()),
        year: params.year,
      }),
      monthlyReport: this.store.findRecord('monthly-report', `${params.year}-${months.indexOf((params.month).toLowerCase())}`),
      openLoans: this.store.query('loan', { open: true }),
    });
  }
}
