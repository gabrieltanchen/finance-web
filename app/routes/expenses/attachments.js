import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ExpensesAttachmentsRoute extends Route {
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

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      attachments: this.store.query('attachment', {
        expense_id: params.expense_id,
        page: params.page,
        sort: params.sort,
        sortDirection: params.sortDirection,
      }),
      expense: this.store.findRecord('expense', params.expense_id),
    });
  }
}
