import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class DepositsNewRoute extends Route {
  @service session;
  @service store;
  queryParams = {
    fundId: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  async model(params) {
    const deposit = this.store.createRecord('deposit');
    if (params.fundId) {
      const fund = await this.store.findRecord('fund', params.fundId);
      deposit.fund = fund;
    }
    return RSVP.hash({
      deposit,
      funds: this.store.findAll('fund'),
    });
  }

  resetController(controller) {
    if (controller.deposit && controller.deposit.hasDirtyAttributes) {
      controller.deposit.rollbackAttributes();
    }
  }
}
