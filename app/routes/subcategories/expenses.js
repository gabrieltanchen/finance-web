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

  async model(params) {
    let newExpense = null;
    let householdMembers = null;
    if (params.create === 'true') {
      newExpense = this.store.createRecord('expense', {
        subcategory: await this.store.findRecord('subcategory', params.subcategory_uuid),
      });
      householdMembers = this.store.findAll('household-member');
    }
    return RSVP.hash({
      expenses: get(this, 'store').query('expense', {
        limit: params.limit,
        page: params.page,
        subcategory_uuid: params.subcategory_uuid,
      }),
      householdMembers,
      newExpense,
      subcategory: get(this, 'store').findRecord('subcategory', params.subcategory_uuid),
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    if (model.expenses.meta) {
      set(controller, 'meta', model.expenses.meta);
    }
  },
});
