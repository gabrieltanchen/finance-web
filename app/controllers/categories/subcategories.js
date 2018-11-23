import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  meta: null,
  tableColumns: [{
    isLink: true,
    linkParam: 'id',
    linkTo: 'categories.show',
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'created_at',
  }],
  category: alias('model.category'),
  newCategory: alias('model.newCategory'),
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
