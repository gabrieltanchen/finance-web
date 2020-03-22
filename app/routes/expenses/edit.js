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
    const expense = await get(this, 'store').findRecord('expense', params.expense_uuid);
    const subcategory = await expense.subcategory;
    return RSVP.hash({
      category: await subcategory.category,
      expense,
      householdMember: await expense.household_member,
      householdMembers: this.store.findAll('household-member'),
      subcategory,
      vendor: await expense.vendor,
    });
  },
});
