import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class BudgetsEditController extends Controller {
  @alias('model.budget') budget;
  @alias('model.subcategories') subcategories;

  @action
  transitionToBudgetDetails() {
    this.transitionToRoute('budgets.show', this.budget.id);
  }
}
