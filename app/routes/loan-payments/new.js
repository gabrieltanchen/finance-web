import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class LoanPaymentsNewRoute extends Route {
  @service router;
  @service session;
  @service store;
  queryParams = {
    loanId: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  async model(params) {
    const loanPayment = this.store.createRecord('loan-payment');
    if (params.loanId) {
      const loan = await this.store.findRecord('loan', params.loanId);
      loanPayment.loan = loan;
    }
    return RSVP.hash({
      loanPayment,
      loans: this.store.findAll('loan'),
    });
  }

  resetController(controller) {
    if (controller.loanPayment && controller.loanPayment.hasDirtyAttributes) {
      controller.loanPayment.rollbackAttributes();
    }
  }
}
