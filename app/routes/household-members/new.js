import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HouseholdMembersNewRoute extends Route {
  @service session;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model() {
    return this.store.createRecord('household-member');
  }

  resetController(controller) {
    if (controller.householdMember && controller.householdMember.hasDirtyAttributes) {
      controller.householdMember.rollbackAttributes();
    }
  }
}
