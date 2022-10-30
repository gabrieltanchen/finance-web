import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class FundsNewController extends Controller {
  @service router;
  @alias('model') fund;

  @action transitionToFundDetails() {
    this.router.transitionTo('funds.show', this.fund.id);
  }
}
