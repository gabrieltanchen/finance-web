import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class DepositsNewController extends Controller {
  @service router;
  @alias('model.deposit') deposit;
  @alias('model.funds') funds;

  @action
  async transitionToDepositDetails() {
    const fund = await this.deposit.fund;
    this.router.transitionTo('funds.deposits', fund.id);
  }
}
