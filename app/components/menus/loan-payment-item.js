import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusLoanPaymentItemComponent extends Component {
  @service router;

  get isDetailsRoute() {
    return this.router.currentRouteName === 'loan-payments.show';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'loan-payments.settings';
  }
}
