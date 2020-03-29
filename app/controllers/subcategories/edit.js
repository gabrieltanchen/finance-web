import Controller from '@ember/controller';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import CategoryValidations from '../../validations/category';

export default Controller.extend({
  category: alias('model.category'),
  subcategory: alias('model.subcategory'),
  CategoryValidations,
  errors: null,

  actions: {
    subcategorySaved() {
      const subcategory = get(this, 'subcategory');
      this.transitionToRoute('subcategories.show', subcategory.id);
    },
  },
});
