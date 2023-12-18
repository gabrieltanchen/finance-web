import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SubcategoriesNewRoute extends Route {
  @service router;
  @service session;
  @service store;
  queryParams = {
    categoryId: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  async model(params) {
    const category = await this.store.findRecord('category', params.categoryId);
    return this.store.createRecord('subcategory', {
      category,
    });
  }

  resetController(controller) {
    if (controller.subcategory && controller.subcategory.hasDirtyAttributes) {
      controller.subcategory.rollbackAttributes();
    }
  }
}
