import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CategoriesNewRoute extends Route {
  @service session;
  @service store;

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  model() {
    return this.store.createRecord('category');
  }

  resetController(controller) {
    if (controller.category && controller.category.hasDirtyAttributes) {
      controller.category.rollbackAttributes();
    }
  }
}
