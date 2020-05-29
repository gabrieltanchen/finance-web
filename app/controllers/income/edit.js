import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class IncomeEditController extends Controller {
  @alias('model.householdMembers') householdMembers;
  @alias('model.income') income;

  @action
  transitionToIncomeDetails() {
    this.transitionToRoute('income.show', this.income.id);
  }
}
