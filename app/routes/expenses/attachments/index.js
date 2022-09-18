import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ExpensesAttachmentsIndexRoute extends Route {
  @service session;
  @service store;

  queryParams = {
    page: {
      refreshModel: true,
    },
    sort: {
      refreshModel: true,
    },
    sortDirection: {
      refreshModel: true,
    },
  }

  model(params) {
    const attachmentParams = this.paramsFor('expenses.attachments');
    return RSVP.hash({
      attachments: this.store.query('attachment', {
        expense_id: attachmentParams.expense_id,
        page: params.page,
        sort: params.sort,
        sortDirection: params.sortDirection,
      }),
      expense: this.store.findRecord('expense', attachmentParams.expense_id),
    });
  }
}
