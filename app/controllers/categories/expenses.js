import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import ExpenseValidations from '../../validations/expense';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  ExpenseValidations,
  meta: null,
  tableColumns: [{
    name: 'Date',
    propertyName: 'date',
  }, {
    name: 'Vendor',
    propertyName: 'vendor.name',
  }, {
    name: 'Description',
    propertyName: 'description',
  }, {
    name: 'Amount',
    propertyName: 'amount',
  }, {
    name: 'Reimbursed Amount',
    propertyName: 'reimbursed_amount',
  }],
  category: alias('model.category'),
  expenses: alias('model.expenses'),
  householdMembers: alias('model.householdMembers'),
  newExpense: alias('model.newExpense'),

  actions: {
    closeCreateForm() {
      set(this, 'create', null);
    },
    async householdMemberSelected(householdMemberId) {
      const householdMember = await get(this, 'store').findRecord('household-member', householdMemberId);
      set(get(this, 'newExpense'), 'household_member', householdMember);
    },
    showCreateForm() {
      set(this, 'create', true);
    },
    async vendorSelected(vendorId) {
      const vendor = await get(this, 'store').findRecord('vendor', vendorId);
      set(get(this, 'newExpense'), 'vendor', vendor);
    },
  },
});
