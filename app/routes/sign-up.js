import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  async beforeModel() {
    if (await this.get('session').isLoggedIn()) {
      this.transitionTo('dashboard');
    }
  },

  model() {
    return this.store.createRecord('user');
  },
});
