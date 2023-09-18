import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class LoansNewController extends Controller {
  @service router;
  @alias('model') loan;

  @action transitionToLoanDetails() {
    this.router.transitionTo('loans.show', this.loan.id);
  }
}
