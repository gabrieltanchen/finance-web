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

  model(params) {
    return RSVP.hash({
      vendor: get(this, 'store').findRecord('vendor', params.vendor_uuid),
    });
  },
});
