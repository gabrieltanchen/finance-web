import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  disableSubmit: computed('category.isInvalid', function() {
    return get(this, 'category.isInvalid');
  }),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const category = get(this, 'category');
      try {
        await category.save();
        get(this, 'categorySaved')();
      } catch (err) {
        let errors = ['Unable to save category.'];
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
