import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class VendorItemMenuComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'vendors.show';
  }

  get isExpensesRoute() {
    return this.router.currentRouteName === 'vendors.expenses';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'vendors.settings';
  }
}
