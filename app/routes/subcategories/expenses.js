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
    const subcategory = await this.store.findRecord('subcategory', params.subcategory_uuid);
    let newExpense = null;
    let householdMembers = null;
    if (params.create === 'true') {
      newExpense = this.store.createRecord('expense', {
        subcategory,
      });
      householdMembers = this.store.findAll('household-member');
    }
    return RSVP.hash({
      category: await subcategory.category,
      expenses: get(this, 'store').query('expense', {
        limit: params.limit,
        page: params.page,
        subcategory_uuid: params.subcategory_uuid,
      }),
      householdMembers,
      newExpense,
      subcategory,
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    if (model.expenses.meta) {
      set(controller, 'meta', model.expenses.meta);
    }
  },
});
