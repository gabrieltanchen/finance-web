import Controller from '@ember/controller';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import VendorValidations from '../../validations/vendor';

export default Controller.extend({
  vendor: alias('model.vendor'),
  VendorValidations,
  errors: null,

  actions: {
    vendorSaved() {
      const vendor = get(this, 'vendor');
      this.transitionToRoute('vendors.show', vendor.id);
    },
  },
});
