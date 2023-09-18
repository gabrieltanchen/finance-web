import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class LoanPaymentsEditRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      loanPayment: this.store.findRecord('loan-payment', params.loan_payment_id),
      loans: this.store.findAll('loan'),
    });
  }

  resetController(controller) {
    if (controller.loanPayment && controller.loanPayment.hasDirtyAttributes) {
      controller.loanPayment.rollbackAttributes();
    }
  }
}
