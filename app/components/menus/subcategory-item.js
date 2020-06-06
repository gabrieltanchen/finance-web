import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class MenusSubcategoryItemComponent extends Component {
  @service router;

  get isAnnualReportRoute() {
    return this.router.currentRouteName === 'subcategories.annual-report';
  }

  get isBudgetsRoute() {
    return this.router.currentRouteName === 'subcategories.budgets';
  }

  get isDetailsRoute() {
    return this.router.currentRouteName === 'subcategories.show';
  }

  get isExpensesRoute() {
    return this.router.currentRouteName === 'subcategories.expenses';
  }

  get isSettingsRoute() {
    return this.router.currentRouteName === 'subcategories.settings';
  }
}
