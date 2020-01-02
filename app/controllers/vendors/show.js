import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  vendor: alias('model.vendor'),
  errors: null,
  showDeleteModal: false,

  actions: {
    closeDeleteModal() {
      set(this, 'showDeleteModal', false);
    },
    async deleteVendor() {
      set(this, 'showDeleteModal', false);
      const vendor = get(this, 'vendor');
      try {
        await vendor.destroyRecord();
        this.transitionToRoute('vendors.index');
      } catch (err) {
        vendor.rollbackAttributes();
        let errors = ['Unable to delete vendor.'];
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
