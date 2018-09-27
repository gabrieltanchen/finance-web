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
    let newCategory = null;
    if (params.create === 'true') {
      newCategory = this.store.createRecord('category', {
        parent_uuid: params.category_uuid,
      });
    }
    return RSVP.hash({
      category: get(this, 'store').findRecord('category', params.category_uuid),
      newCategory,
      subcategories: get(this, 'store').query('category', {
        limit: params.limit,
        page: params.page,
        parent_uuid: params.category_uuid,
      }),
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    if (model.subcategories.meta) {
      set(controller, 'meta', model.subcategories.meta);
    }
  },
});
