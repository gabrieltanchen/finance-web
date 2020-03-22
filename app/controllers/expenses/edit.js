import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import ExpenseValidations from '../../validations/expense';

export default Controller.extend({
  category: alias('model.category'),
  expense: alias('model.expense'),
  householdMember: alias('model.householdMember'),
  householdMembers: alias('model.householdMembers'),
  subcategory: alias('model.subcategory'),
  vendor: alias('model.vendor'),
  ExpenseValidations,
  errors: null,

  householdMemberName: computed('householdMember.name', function() {
    return get(this, 'householdMember.name');
  }),
  vendorName: computed('vendor.name', function() {
    return get(this, 'vendor.name');
  }),

  actions: {
    async householdMemberSelected(householdMemberId) {
      const householdMember = await get(this, 'store').findRecord('household-member', householdMemberId);
      set(get(this, 'expense'), 'household_member', householdMember);
    },
    expenseSaved() {
      const expense = get(this, 'expense');
      this.transitionToRoute('expenses.show', expense.id);
    },
    async vendorSelected(vendorId) {
      const vendor = await get(this, 'store').findRecord('vendor', vendorId);
      set(get(this, 'expense'), 'vendor', vendor);
    },
  },
});
