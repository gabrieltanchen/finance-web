import Route from '@ember/routing/route';
import { get } from '@ember/object';
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
    const subcategory = await this.store.findRecord('subcategory', params.subcategory_uuid);
    return RSVP.hash({
      annualReports: get(this, 'store').query('subcategory-annual-report', {
        subcategory_uuid: params.subcategory_uuid,
      }),
      category: await subcategory.category,
      subcategory,
    });
  },
});
