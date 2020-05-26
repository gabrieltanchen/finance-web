import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusIncomeItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'income.show';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'income.settings';
  }
}
