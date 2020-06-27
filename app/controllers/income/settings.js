import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class IncomeSettingsController extends Controller {
  @alias('model') income;
  @tracked showDeleteModal = false;
  @tracked deleteErrors = [];

  @action
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  @action
  async deleteIncome(e) {
    e.preventDefault();
    try {
      await this.income.destroyRecord();
      this.showDeleteModal = false;
      this.transitionToRoute('income.index');
    } catch (err) {
      this.income.rollbackAttributes();
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
