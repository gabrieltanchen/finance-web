import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { set } from '@ember/object';
import CategoryValidations from '../../validations/category';

export default Controller.extend({
  categories: alias('model.categories'),
  CategoryValidations,
  meta: null,
  newCategory: alias('model.newCategory'),
  queryParams: ['create', 'limit', 'page'],

  tableColumns: [{
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'created_at',
  }],

  actions: {
    closeCreateForm() {
      set(this, 'create', null);
    },
    showCreateForm() {
      set(this, 'create', true);
    },
  },
});
