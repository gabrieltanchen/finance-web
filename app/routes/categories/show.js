import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  session: service(),

  async beforeModel() {
    if (!(await get(this, 'session').isLoggedIn())) {
      this.transitionTo('login');
    }
  },

  model(params) {
    return RSVP.hash({
      category: get(this, 'store').findRecord('category', params.category_uuid),
    });
  },

  resetController(controller) {
    set(controller, 'errors', null);
    set(controller, 'showDeleteModal', false);
  },
});
