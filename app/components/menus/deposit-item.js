import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusDepositItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'deposits.show';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'deposits.settings';
  }
}
