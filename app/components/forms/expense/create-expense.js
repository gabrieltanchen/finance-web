import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  disableSubmit: computed(
    'expense.{isDirty,isInvalid}',
    function() {
      return !get(this, 'expense.isDirty')
        || get(this, 'expense.isInvalid');
    },
  ),

  actions: {
    async selectVendor(vendor) {
      console.log('selectVendor');
      console.log(vendor);
      set(this, 'expense.vendor', vendor);
      set(this, 'vendorSearch', get(vendor, 'name'));
    },

    async submit() {
      console.log('submit');
      set(this, 'errors', null);
      const expense = get(this, 'expense');
      try {
        await expense.save();
        get(this, 'expenseCreated')();
      } catch (err) {
        let errors = 'Unable to create expense.';
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
