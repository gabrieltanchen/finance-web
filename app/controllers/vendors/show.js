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
    name: 'Cumulative Amount',
    propertyName: 'sumAmount',
  }, {
    name: 'Cumulative Reimbursed',
    propertyName: 'sumReimbursed',
  }, {
    name: 'Cumulative Total',
    propertyName: 'sumTotal',
  }]
}
