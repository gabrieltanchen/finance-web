import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class DepositsSettingsController extends Controller {
  @alias('model') deposit;
  @tracked showDeleteModal;
  @tracked deleteErrors = [];

  @action
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  @action
  async deleteDeposit(e) {
    e.preventDefault();
    const fundId = this.deposit.fund.get('id');
    try {
      await this.deposit.destroyRecord();
      this.showDeleteModal = false;
      this.transitionToRoute('funds.deposits', fundId);
    } catch (err) {
      this.deposit.rollbackAttributes();
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
