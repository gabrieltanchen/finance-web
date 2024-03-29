import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusLoanItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'loans.show';
  }

  get isLoanPaymentsRoute() {
    return this.router.currentRouteName === 'loans.loan-payments';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'loans.settings';
  }
}
