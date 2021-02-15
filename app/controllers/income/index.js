import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class IncomeIndexController extends Controller {
  queryParams = ['page', 'sort', 'sortDirection'];

  @alias('model') incomes;
  @tracked page = null;
  @tracked sort = null;
  @tracked sortDirection = null;
  defaultSort = 'date';
  defaultSortDirection = 'desc';

  tableColumns = [{
    name: 'Date',
    propertyName: 'date',
    sortable: true,
    sortName: 'date',
  }, {
    name: 'Member',
    propertyName: 'householdMember.name',
    sortable: true,
    sortName: 'member',
  }, {
    name: 'Description',
    propertyName: 'description',
    sortable: true,
    sortName: 'description',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
    sortable: true,
    sortName: 'amount',
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
  setSort(sortName, sortDirection) {
    this.sort = sortName;
    this.sortDirection = sortDirection;
  }
}
