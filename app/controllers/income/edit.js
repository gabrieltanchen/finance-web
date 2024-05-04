import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class IncomeEditController extends Controller {
  @service router;
  @alias('model.employers') employers;
  @alias('model.householdMembers') householdMembers;
  @alias('model.income') income;

  @action
  transitionToIncomeDetails() {
    this.router.transitionTo('income.show', this.income.id);
  }
}
