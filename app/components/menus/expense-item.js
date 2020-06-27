import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusExpenseItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'expenses.show';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'expenses.settings';
  }
}
