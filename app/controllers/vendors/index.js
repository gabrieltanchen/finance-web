import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { set } from '@ember/object';
import VendorValidations from '../../validations/vendor';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  meta: null,
  tableColumns: [{
    isLink: true,
    linkParam: 'id',
    linkTo: 'vendors.show',
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'created_at',
  }],
  VendorValidations,
  newVendor: alias('model.newVendor'),
  vendors: alias('model.vendors'),

  actions: {
    closeCreateForm() {
      set(this, 'create', null);
    },
    showCreateForm() {
      set(this, 'create', true);
    },
  },
});
