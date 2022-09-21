import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class BudgetsNewController extends Controller {
  @service router;
  @alias('model.budget') budget;
  @alias('model.subcategories') subcategories;

  @action
  transitionToBudgetDetails() {
    this.router.transitionTo('budgets.show', this.budget.id);
  }
}
