import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class CategoriesSubcategoriesRoute extends Route {
  @service router;
  @service session;
  @service store;

  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.router.transitionTo('login');
    }
  }

  model(params) {
    return RSVP.hash({
      category: this.store.findRecord('category', params.category_id),
      subcategories: this.store.query('subcategory', {
        category_id: params.category_id,
        page: params.page,
      }),
    });
  }
}
