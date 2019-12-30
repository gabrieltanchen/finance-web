import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  disableSubmit: computed(
    'category.{isDirty,isInvalid}',
    function() {
      return !get(this, 'category.isDirty')
        || get(this, 'category.isInvalid');
    },
  ),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const category = get(this, 'category');
      try {
        await category.save();
        get(this, 'categoryCreated')();
      } catch (err) {
        let errors = ['Unable to create category.'];
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
