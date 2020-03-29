import Controller from '@ember/controller';
import { set } from '@ember/object';
import { alias } from '@ember/object/computed';

import CategoryValidations from '../../validations/category';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  CategoryValidations,
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
  categories: alias('model.categories'),
  newCategory: alias('model.newCategory'),

  actions: {
    closeCreateForm() {
      set(this, 'create', null);
    },
    showCreateForm() {
      set(this, 'create', true);
    },
  },
});
