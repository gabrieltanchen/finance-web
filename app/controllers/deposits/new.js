import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class DepositsNewController extends Controller {
  @service router;
  @alias('model.deposit') deposit;
  @alias('model.funds') funds;

  @action
  transitionToDepositDetails() {
    this.router.transitionTo('deposits.show', this.deposit.id);
  }
}
