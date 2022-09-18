import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class ExpensesAttachmentsNewController extends Controller {
  @alias('model.attachment') attachment;
  @alias('model.expense') expense;

  @action
  transitionToExpenseAttachments() {
    this.transitionToRoute('expenses.attachments.index', this.expense.id);
  }
}
