import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class DepositsEditController extends Controller {
  @alias('model.deposit') deposit;
  @alias('model.funds') funds;

  @action
  transitionToDepositDetails() {
    this.transitionToRoute('deposits.show', this.deposit.id);
  }
}
