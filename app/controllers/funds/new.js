import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class FundsNewController extends Controller {
  @alias('model') fund;

  @action transitionToFundDetails() {
    this.transitionToRoute('funds.show', this.fund.id);
  }
}
