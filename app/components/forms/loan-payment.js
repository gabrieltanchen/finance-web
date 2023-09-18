import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormsLoanPaymentComponent extends Component {
  @service store;
  @tracked errors = [];

  @action
  selectLoan(loan) {
    set(this, 'args.loanPayment.loan', loan);
  }

  @action
  updateLoanSearch(searchTerm) {
    return this.store.query('loan', {
      search: searchTerm,
    });
  }

  @action
  dateSelected(date) {
    set(this, 'args.loanPayment.date', date.toISOString());
  }

  @action
  async save(e) {
    e.preventDefault();
    try {
      await this.args.loanPayment.save();
      this.args.saveSuccessful();
    } catch (err) {
      let errors = ['An error occurred. Please try again later.'];
      if (err && err.errors) {
        errors = err.errors.map((error) => {
          return error.detail;
        });
      }
      this.errors = errors;
    }
  }
}
