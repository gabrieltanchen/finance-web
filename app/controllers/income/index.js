import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class IncomeIndexController extends Controller {
  queryParams = ['page', 'sort', 'sortDirection'];

  @alias('model') incomes;
  @tracked page = null;

  tableColumns = [{
    name: 'Date',
    propertyName: 'date',
    sort: true,
  }, {
    name: 'Member',
    propertyName: 'householdMember.name',
    sort: true,
  }, {
    name: 'Description',
    propertyName: 'description',
    sort: true,
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
    sort: true,
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

  @action
  setSort(column, direction) {
    this.sort = column;
    this.sortDirection = direction;
  }
}
