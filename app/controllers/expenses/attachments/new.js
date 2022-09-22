import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class ExpensesAttachmentsNewController extends Controller {
  @service router;
  @alias('model.attachment') attachment;
  @alias('model.expense') expense;

  @action
  transitionToExpenseAttachments() {
    this.router.transitionTo('expenses.attachments.index', this.expense.id);
  }
}
