import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EmployersSettingsController extends Controller {
  @service router;
  @alias('model') employer;
  @tracked showDeleteModal;
  @tracked deleteErrors = [];

  @action
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  @action
  async deleteEmployer(e) {
    e.preventDefault();
    try {
      await this.employer.destroyRecord();
      this.showDeleteModal = false;
      this.router.transitionTo('employers.index');
    } catch (err) {
      this.employer.rollbackAttributes();
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
