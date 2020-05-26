import Route from '@ember/routing/route';
import RSVP from 'rsvp';

import { inject as service } from '@ember/service';

export default class HouseholdMembersExpensesRoute extends Route {
  @service session;

  queryParams = {
    page: {
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
      expenses: this.store.query('expense', {
        household_member_id: params.member_id,
        page: params.page,
      }),
      householdMember: this.store.findRecord('household-member', params.member_id),
    });
  }
}
