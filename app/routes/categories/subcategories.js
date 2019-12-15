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
    const category = await get(this, 'store').findRecord('category', params.category_uuid);
    let newSubcategory = null;
    if (params.create === 'true') {
      newSubcategory = this.store.createRecord('subcategory', {
        category,
      });
    }
    return RSVP.hash({
      category,
      newSubcategory,
      subcategories: get(this, 'store').query('subcategory', {
        category_uuid: params.category_uuid,
        limit: params.limit,
        page: params.page,
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
