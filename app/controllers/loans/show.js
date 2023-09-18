import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class LoansShowController extends Controller {
  @alias('model') loan;

  properties=[{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
  }, {
    name: 'Balance',
    propertyName: 'balanceStr',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];
}
