import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class LoansLoanPaymentsRoute extends Route {
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
      loan: this.store.findRecord('loan', params.loan_id),
      loanPayments: this.store.query('loan-payment', {
        loan_id: params.loan_id,
        page: params.page,
        sort: params.sort,
        sortDirection: params.sortDirection,
      }),
    });
  }
}
