import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class SubcategoriesBudgetsController extends Controller {
  queryParams = ['page'];

  @alias('model.budgets') budgets;
  @alias('model.subcategory') subcategory;
  @tracked page = null;

  tableColumns = [{
    name: 'Year',
    propertyName: 'year',
  }, {
    name: 'Month',
    propertyName: 'monthStr',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
  }, {
    linkText: 'View',
    linkTo: 'budgets.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'budgets.edit',
    name: '',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
