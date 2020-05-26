import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class HouseholdMembersIncomeRoute extends Route {
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
      incomes: this.store.query('income', {
        household_member_id: params.member_id,
        page: params.page,
      }),
      householdMember: this.store.findRecord('household-member', params.member_id),
    });
  }
}
