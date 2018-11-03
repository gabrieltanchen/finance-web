import Component from '@ember/component';
import {
  computed,
  get,
  observer,
  set,
} from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'finance-web/config/environment';

export default Component.extend({
  ajax: service(),
  errors: null,
  vendorSearch: '',
  vendors: [],

  disableSubmit: computed(
    'expense.{isDirty,isInvalid}',
    function() {
      return !get(this, 'expense.isDirty')
        || get(this, 'expense.isInvalid');
    },
  ),

  vendorSearchChanged: observer('vendorSearch', function() {
    return this.getVendors();
  }),

  didInsertElement() {
    return this.getVendors();
  },

  getVendors() {
    const vendorSearch = get(this, 'vendorSearch');
    return get(this, 'ajax').request(`${ENV.apiURL}/vendors?search=${vendorSearch}`, {
      method: 'GET',
    }).then((res) => {
      return res.data.map((vendor) => {
        return {
          'created-at': vendor.attributes['created-at'],
          id: vendor.id,
          name: vendor.attributes.name,
        };
      });
    }).then((vendors) => {
      set(this, 'vendors', vendors);
    });
  },

  actions: {
    async selectVendor(vendor) {
      get(this, 'vendorSelected')(vendor.id);
      set(this, 'vendorSearch', vendor.name);
      // set(this, 'expense.vendor', vendor);
      // set(this, 'vendorSearch', get(vendor, 'name'));
    },

    async submit() {
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
