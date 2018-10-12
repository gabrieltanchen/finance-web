import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
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
