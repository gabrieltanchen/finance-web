import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  queryParams: {
    create: {
      refreshModel: true,
    },
    limit: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
  },

  async beforeModel() {
    if (!(await get(this, 'session').isLoggedIn())) {
      this.transitionTo('login');
    }
  },

  model(params) {
    return RSVP.hash({
      newHouseholdMember: (params.create === 'true') ? this.store.createRecord('household-member') : null,
      householdMembers: this.store.query('household-member', params),
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    if (model.householdMembers.meta) {
      set(controller, 'meta', model.householdMembers.meta);
    }
  },
});
