import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoanPaymentsSettingsController extends Controller {
  @service router;
  @alias('model') loanPayment;
  @tracked showDeleteModal;
  @tracked deleteErrors = [];

  @action
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  @action
  async deleteLoanPayment(e) {
    e.preventDefault();
    const loanId = (await this.loanPayment.loan).id;
    try {
      await this.loanPayment.destroyRecord();
      this.showDeleteModal = false;
      this.router.transitionTo('loans.loan-payments', loanId);
    } catch (err) {
      this.loanPayment.rollbackAttributes();
      let errors = ['An error occurred. Please try again later.'];
      if (err && err.errors) {
        errors = err.errors.map((error) => {
          return error.detail;
        });
      }
      this.deleteErrors = errors;
    }
  }

  @action
  openDeleteModal() {
    this.deleteErrors = [];
    this.showDeleteModal = true;
  }
}
