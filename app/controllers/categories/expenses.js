import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import ExpenseValidations from '../../validations/expense';

export default Controller.extend({
  queryParams: ['create'],
  ExpenseValidations,
  category: alias('model.category'),
  newExpense: alias('model.newExpense'),

  actions: {
    closeCreateForm() {
      set(this, 'create', null);
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
