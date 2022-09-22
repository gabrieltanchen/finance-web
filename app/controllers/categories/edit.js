import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class CategoriesEditController extends Controller {
  @service router;
  @alias('model') category;

  @action
  transitionToCategoryDetails() {
    this.router.transitionTo('categories.show', this.category.id);
  }
}
