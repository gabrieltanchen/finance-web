import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HouseholdMembersEditRoute extends Route {
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return this.store.findRecord('household-member', params.member_id);
  }

  resetController(controller) {
    if (controller.householdMember && controller.householdMember.hasDirtyAttributes) {
      controller.householdMember.rollbackAttributes();
    }
  }
}
