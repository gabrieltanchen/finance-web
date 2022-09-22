import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class SubcategoriesEditController extends Controller {
  @service router;
  @alias('model') subcategory;

  @action transitionToSubcategoryDetails() {
    this.router.transitionTo('subcategories.show', this.subcategory.id);
  }
}
