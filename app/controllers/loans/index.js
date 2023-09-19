import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class LoansIndexController extends Controller {
  queryParams = ['page'];

  @alias('model') loans;
  @tracked page = null;

  tableColumns = [{
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
  }, {
    name: 'Balance',
    propertyName: 'balanceStr',
  }, {
    linkText: 'View',
    linkTo: 'loans.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'loans.edit',
    name: '',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
