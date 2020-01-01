import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  category: alias('model.category'),
  errors: null,

  actions: {
    async deleteCategory() {
      const category = get(this, 'category');
      try {
        await category.destroyRecord();
        this.transitionToRoute('categories.index');
      } catch (err) {
        let errors = ['Unable to delete category.'];
        if (err && err.errors) {
          errors = err.errors.map((error) => {
            return error.detail;
          });
        }
        set(this, 'errors', errors);
      }
    },
  },
});
