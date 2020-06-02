import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusCategoryItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'categories.show';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'categories.settings';
  }

  get isSubcategoriesRoute() {
    return this.router.currentRouteName === 'categories.subcategories';
  }
}
