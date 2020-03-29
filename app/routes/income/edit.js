import { get } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  session: service(),

  async beforeModel() {
    if (!(await get(this, 'session').isLoggedIn())) {
      this.transitionTo('login');
    }
  },

  async model(params) {
    const income = await get(this, 'store').findRecord('income', params.income_uuid);
    return RSVP.hash({
      householdMember: await income.household_member,
      householdMembers: this.store.findAll('household-member'),
      income,
    });
  },
});
