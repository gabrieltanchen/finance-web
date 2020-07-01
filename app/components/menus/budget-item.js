import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusBudgetItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'budgets.show';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'budgets.settings';
  }
}
