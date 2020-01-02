import Controller from '@ember/controller';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import CategoryValidations from '../../validations/category';

export default Controller.extend({
  category: alias('model.category'),
  CategoryValidations,
  errors: null,

  actions: {
    categorySaved() {
      const category = get(this, 'category');
      this.transitionToRoute('categories.show', category.id);
    },
  },
});
