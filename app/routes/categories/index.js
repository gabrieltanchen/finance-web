import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

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
      categories: this.store.query('category', params),
      newCategory: (params.create === 'true') ? this.store.createRecord('category') : null,
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    if (model.categories.meta) {
      set(controller, 'meta', model.categories.meta);
    }
  },
});
