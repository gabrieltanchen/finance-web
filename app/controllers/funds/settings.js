import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class FundsSettingsController extends Controller {
  @alias('model') fund;
  @tracked showDeleteModal;
  @tracked deleteErrors = [];

  @action
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  @action
  async deleteFund(e) {
    e.preventDefault();
    try {
      await this.fund.destroyRecord();
      this.showDeleteModal = false;
      this.transitionToRoute('funds.index');
    } catch (err) {
      this.fund.rollbackAttributes();
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
