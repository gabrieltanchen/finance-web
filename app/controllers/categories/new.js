import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class CategoriesNewController extends Controller {
  @alias('model') category;

  @action
  transitionToCategoryDetails() {
    this.transitionToRoute('categories.show', this.category.id);
  }
}
