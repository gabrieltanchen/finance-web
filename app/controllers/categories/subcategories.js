import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { set } from '@ember/object';
import CategoryValidations from '../../validations/category';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  CategoryValidations,
  meta: null,
  tableColumns: [{
    isLink: true,
    linkParam: 'id',
    linkTo: 'subcategories.show',
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'created_at',
  }],
  category: alias('model.category'),
  newSubcategory: alias('model.newSubcategory'),
  subcategories: alias('model.subcategories'),

  actions: {
    closeCreateForm() {
      set(this, 'create', null);
    },
    showCreateForm() {
      set(this, 'create', true);
    },
  },
});
