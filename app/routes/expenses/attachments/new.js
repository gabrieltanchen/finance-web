import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ExpensesAttachmentsNewRoute extends Route {
  @service session;
  @service store;

  async model() {
    const attachmentParams = this.paramsFor('expenses.attachments');
    const expense = await this.store.findRecord('expense', attachmentParams.expense_id);
    return RSVP.hash({
      attachment: this.store.createRecord('attachment', {
        expense,
      }),
      expense,
    });
  }

  resetController(controller) {
    if (controller.attachment && controller.attachment.hasDirtyAttributes) {
      controller.attachment.rollbackAttributes();
    }
  }
}
