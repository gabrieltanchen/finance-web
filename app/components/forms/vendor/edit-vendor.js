import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  disableSubmit: computed('vendor.isInvalid', function() {
    return get(this, 'vendor.isInvalid');
  }),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const vendor = get(this, 'vendor');
      try {
        await vendor.save();
        get(this, 'vendorSaved')();
      } catch (err) {
        let errors = ['Unable to save vendor.'];
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
