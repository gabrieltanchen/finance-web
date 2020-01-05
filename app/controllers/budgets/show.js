import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  budget: alias('model.budget'),
  subcategory: alias('model.subcategory'),
  errors: null,
  showDeleteModal: false,

  actions: {
    closeDeleteModal() {
      set(this, 'showDeleteModal', false);
    },
    async deleteBudget() {
      set(this, 'showDeleteModal', false);
      const budget = get(this, 'budget');
      const subcategory = get(this, 'subcategory');
      try {
        await budget.destroyRecord();
        this.transitionToRoute('subcategories.budgets', subcategory.id);
      } catch (err) {
        budget.rollbackAttributes();
        let errors = ['Unable to delete budget.'];
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
