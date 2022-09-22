import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SubcategoriesNewController extends Controller {
  queryParams = ['categoryId'];
  @service router;
  @alias('model') subcategory;
  @tracked categoryId;

  @action transitionToSubcategoryDetails() {
    this.router.transitionTo('subcategories.show', this.subcategory.id);
  }
}
