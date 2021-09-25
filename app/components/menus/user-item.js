import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusUserItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'users.show';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'users.settings';
  }
}
