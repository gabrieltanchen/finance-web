import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  categories: alias('model.categories'),
  newCategory: alias('model.newCategory'),
  queryParams: ['create', 'limit', 'page'],

  actions: {
    showCreateForm() {
      set(this, 'create', true);
    },
  },
});
