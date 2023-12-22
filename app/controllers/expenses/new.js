import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class ExpensesNewController extends Controller {
  @service router;
  @alias('model.expense') expense;
  @alias('model.funds') funds;
  @alias('model.householdMembers') householdMembers;
  @alias('model.subcategories') subcategories;
  @alias('model.vendors') vendors;

  @action
  async transitionToExpenseDetails() {
    const subcategory = await this.expense.subcategory;
    this.router.transitionTo('subcategories.expenses', subcategory.id);
  }
}
