import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class VendorsExpensesController extends Controller {
  queryParams = ['page'];

  @alias('model.expenses') expenses;
  @alias('model.vendor') vendor;
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
    propertyName: 'amount',
  }, {
    name: 'Reimbursed Amount',
    propertyName: 'reimbursedAmount',
  }]

  @action
  setPage(page) {
    this.page = page;
  }
}
