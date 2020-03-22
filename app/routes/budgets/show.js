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
    const budget = await get(this, 'store').findRecord('budget', params.budget_uuid);
    return RSVP.hash({
      budget,
      subcategory: await budget.subcategory,
    });
  },

  resetController(controller) {
    set(controller, 'errors', null);
    set(controller, 'showDeleteModal', false);
  },
});
