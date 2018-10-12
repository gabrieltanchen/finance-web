import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { set } from '@ember/object';
import ExpenseValidations from '../../validations/expense';

export default Controller.extend({
  queryParams: ['create', 'vendor'],
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
  },
});
