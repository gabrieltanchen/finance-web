import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HouseholdMembersSettingsController extends Controller {
  @service router;
  @alias('model') householdMember;
  @tracked showDeleteModal = false;
  @tracked deleteErrors = [];

  @action
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  @action
  async deleteHouseholdMember(e) {
    e.preventDefault();
    try {
      await this.householdMember.destroyRecord();
      this.showDeleteModal = false;
      this.router.transitionTo('household-members.index');
    } catch (err) {
      this.householdMember.rollbackAttributes();
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
