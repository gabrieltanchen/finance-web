import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class SubcategoriesEditController extends Controller {
  @alias('model') subcategory;

  @action transitionToSubcategoryDetails() {
    this.transitionToRoute('subcategories.show', this.subcategory.id);
  }
}
