import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class DepositsShowController extends Controller {
  @alias('model') deposit;

  properties = [{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Date',
    propertyName: 'date',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
  }, {
    linkParam: 'fund.id',
    linkTo: 'funds.show',
    name: 'Fund',
    propertyName: 'fund.name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];
}
