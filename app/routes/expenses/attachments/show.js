import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ExpensesAttachmentsShowRoute extends Route {
  @service router;
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    const attachmentParams = this.paramsFor('expenses.attachments');
    return RSVP.hash({
      attachment: this.store.findRecord('attachment', params.attachment_id),
      expense: this.store.findRecord('expense', attachmentParams.expense_id),
    });
  }
}
