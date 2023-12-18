import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class FundsDepositsRoute extends Route {
  @service router;
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
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      deposits: this.store.query('deposit', {
        fund_id: params.fund_id,
        page: params.page,
        sort: params.sort,
        sortDirection: params.sortDirection,
      }),
      fund: this.store.findRecord('fund', params.fund_id),
    });
  }
}
