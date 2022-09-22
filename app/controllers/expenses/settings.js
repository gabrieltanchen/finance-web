import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ExpensesSettingsController extends Controller {
  @service router;
  @alias('model') expense;
  @tracked showDeleteModal;
  @tracked deleteErrors = [];

  @action
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  @action
  async deleteExpense(e) {
    e.preventDefault();
    const subcategoryId = this.expense.subcategory.get('id');
    try {
      await this.expense.destroyRecord();
      this.showDeleteModal = false;
      this.router.transitionTo('subcategories.expenses', subcategoryId);
    } catch (err) {
      this.expense.rollbackAttributes();
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
