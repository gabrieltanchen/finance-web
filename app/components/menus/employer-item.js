import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusEmployerItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'employers.show';
  }
}
