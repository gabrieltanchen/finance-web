import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ExpensesAttachmentsShowController extends Controller {
  @service router;
  @alias('model.attachment') attachment;
  @alias('model.expense') expense;
  @tracked showDeleteModal;
  @tracked deleteErrors = [];

  properties = [{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];

  @action
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  @action
  async deleteAttachment(e) {
    e.preventDefault();
    try {
      await this.attachment.destroyRecord();
      this.showDeleteModal = false;
      this.router.transitionTo('expenses.attachments.index', this.expense.id);
    } catch (err) {
      this.attachment.rollbackAttributes();
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
