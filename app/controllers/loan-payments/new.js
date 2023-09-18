import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class LoanPaymentsNewController extends Controller {
  @service router;
  @alias('model.loanPayment') loanPayment;
  @alias('model.loans') loans;

  @action
  transitionToLoanPaymentDetails() {
    this.router.transitionTo('loan-payments.show', this.loanPayment.id);
  }
}
