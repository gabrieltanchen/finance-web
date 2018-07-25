import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  queryParams: {
    limit: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
  },
  session: service(),

  async beforeModel() {
    if (!(await get(this, 'session').isLoggedIn())) {
      this.transitionTo('login');
    }
  },

  model(params) {
    return this.store.query('category', params);
  },
});
