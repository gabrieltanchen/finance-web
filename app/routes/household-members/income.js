import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class HouseholdMembersIncomeRoute extends Route {
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
      incomes: this.store.query('income', {
        household_member_id: params.member_id,
        page: params.page,
        sort: params.sort,
        sortDirection: params.sortDirection,
      }),
      householdMember: this.store.findRecord('household-member', params.member_id),
    });
  }
}
