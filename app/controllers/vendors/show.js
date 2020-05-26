import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class VendorsShowController extends Controller {
  @alias('model') vendor;

  properties = [{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }, {
    name: 'Number of expenses',
    propertyName: 'expenseCount',
  }, {
    name: 'Cumulative Expense Amount',
    propertyName: 'sumAmount',
  }, {
    name: 'Cumulative Expense Reimbursed',
    propertyName: 'sumReimbursed',
  }, {
    name: 'Cumulative Expense Total',
    propertyName: 'sumTotal',
  }]
}
