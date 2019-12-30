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
    let newBudget = null;
    if (params.create === 'true') {
      newBudget = this.store.createRecord('budget', {
        subcategory: await this.store.findRecord('subcategory', params.subcategory_uuid),
      });
    }
    return RSVP.hash({
      budgets: get(this, 'store').query('budget', {
        limit: params.limit,
        page: params.page,
        subcategory_uuid: params.subcategory_uuid,
      }),
      newBudget,
      subcategory: get(this, 'store').findRecord('subcategory', params.subcategory_uuid),
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    // if (model.budgets.meta) {
    //   set(controller, 'meta', model.budgets.meta);
    // }
  },
});
