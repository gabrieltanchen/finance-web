import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class SubcategoriesNewController extends Controller {
  queryParams = ['categoryId'];

  @alias('model') subcategory;
  @tracked categoryId;

  @action transitionToSubcategoryDetails() {
    this.transitionToRoute('subcategories.show', this.subcategory.id);
  }
}
