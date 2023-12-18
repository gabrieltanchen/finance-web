import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class CategoriesShowController extends Controller {
  @alias('model') category;

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
    name: 'Number of subcategories',
    propertyName: 'subcategoryCount',
  }, {
    name: 'Number of expenses',
    propertyName: 'expenseCount',
  }, {
    name: 'Cumulative Expense Amount',
    propertyName: 'sumAmountStr',
  }, {
    name: 'Cumulative Expense Reimbursed',
    propertyName: 'sumReimbursedStr',
  }, {
    name: 'Cumulative Expense Total',
    propertyName: 'sumTotalStr',
  }];
}
