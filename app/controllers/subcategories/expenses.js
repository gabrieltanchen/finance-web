import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class SubcategoriesExpensesController extends Controller {
  queryParams = ['page'];

  @alias('model.expenses') expenses;
  @alias('model.subcategory') subcategory;
  @tracked page = null;

  tableColumns = [{
    name: 'Date',
    propertyName: 'date',
  }, {
    name: 'Vendor',
    propertyName: 'vendor.name',
  }, {
    name: 'Description',
    propertyName: 'description',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
  }, {
    name: 'Reimbursed Amount',
    propertyName: 'reimbursedAmountStr',
  }, {
    linkText: 'View',
    linkTo: 'expenses.show',
    name: '',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
