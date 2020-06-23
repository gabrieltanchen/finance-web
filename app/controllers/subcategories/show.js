import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class SubcategoriesShowController extends Controller {
  @alias('model') subcategory;

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
    linkParam: 'category.id',
    linkTo: 'categories.show',
    name: 'Parent Category',
    propertyName: 'category.name',
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
