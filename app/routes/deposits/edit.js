import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class DepositsEditRoute extends Route {
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      deposit: this.store.findRecord('deposit', params.deposit_id),
      funds: this.store.findAll('fund'),
    });
  }

  resetController(controller) {
    if (controller.deposit && controller.deposit.hasDirtyAttributes) {
      controller.deposit.rollbackAttributes();
    }
  }
}
