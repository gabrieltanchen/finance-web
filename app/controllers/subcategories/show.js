import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  category: alias('model.category'),
  subcategory: alias('model.subcategory'),
  errors: null,
  showDeleteModal: false,

  actions: {
    closeDeleteModal() {
      set(this, 'showDeleteModal', false);
    },
    async deleteSubcategory() {
      set(this, 'showDeleteModal', false);
      const subcategory = get(this, 'subcategory');
      const category = get(this, 'category');
      try {
        await subcategory.destroyRecord();
        this.transitionToRoute('categories.subcategories', category.id);
      } catch (err) {
        subcategory.rollbackAttributes();
        let errors = ['Unable to delete subcategory.'];
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
