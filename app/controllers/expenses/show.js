import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  category: alias('model.category'),
  expense: alias('model.expense'),
  householdMember: alias('model.householdMember'),
  subcategory: alias('model.subcategory'),
  vendor: alias('model.vendor'),
  errors: null,
  showDeleteModal: false,

  actions: {
    closeDeleteModal() {
      set(this, 'showDeleteModal', false);
    },
    async deleteExpense() {
      set(this, 'showDeleteModal', false);
      const expense = get(this, 'expense');
      const subcategory = get(this, 'subcategory');
      try {
        await expense.destroyRecord();
        this.transitionToRoute('subcategories.expenses', subcategory.id);
      } catch (err) {
        expense.rollbackAttributes();
        let errors = ['Unable to delete expense.'];
        if (err && err.errors) {
          errors = err.errors.map((error) => {
            return error.detail;
          });
        }
        set(this, 'errors', errors);
      }
    },
    openDeleteModal() {
      set(this, 'showDeleteModal', true);
    },
  },
});
