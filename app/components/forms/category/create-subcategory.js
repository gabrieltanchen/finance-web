import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  disableSubmit: computed(
    'subcategory.{isDirty,isInvalid}',
    function() {
      return !get(this, 'subcategory.isDirty')
        || get(this, 'subcategory.isInvalid');
    },
  ),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const subcategory = get(this, 'subcategory');
      try {
        await subcategory.save();
        get(this, 'subcategoryCreated')();
      } catch (err) {
        let errors = ['Unable to create category.'];
        if (err && errors) {
          errors = err.errors.map((error) => {
            return error.detail;
          });
        }
        set(this, 'errors', errors);
      }
    },
  },
});
