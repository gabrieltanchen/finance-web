import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class IncomeIndexController extends Controller {
  queryParams = ['page'];

  @alias('model') incomes;
  @tracked page = null;

  tableColumns = [{
    name: 'Date',
    propertyName: 'date',
  }, {
    name: 'Member',
    propertyName: 'householdMember.name',
  }, {
    name: 'Description',
    propertyName: 'description',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
  }, {
    linkText: 'View',
    linkTo: 'income.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'income.edit',
    name: '',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
