import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusHouseholdMemberItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'household-members.show';
  }

  get isExpensesRoute() {
    return this.router.currentRouteName === 'household-members.expenses';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'household-members.settings';
  }
}
