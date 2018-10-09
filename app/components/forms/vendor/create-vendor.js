import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  disableSubmit: computed(
    'vendor.{isDirty,isInvalid}',
    function() {
      return !get(this, 'vendor.isDirty')
        || get(this, 'vendor.isInvalid');
    },
  ),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const vendor = get(this, 'vendor');
      try {
        await vendor.save();
        get(this, 'vendorCreated')();
      } catch (err) {
        let errors = 'Unable to create vendor.';
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
