import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  async beforeModel() {
    if (!(await get(this, 'session').isLoggedIn())) {
      this.transitionTo('login');
    }
  },

  async model(params) {
    const subcategory = await get(this, 'store').findRecord('subcategory', params.subcategory_uuid);
    return RSVP.hash({
      category: await subcategory.category,
      subcategory,
    });
  },

  resetController(controller) {
    set(controller, 'errors', null);
    set(controller, 'showDeleteModal', false);
  },
});
