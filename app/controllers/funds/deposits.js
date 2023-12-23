import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class FundsDepositsController extends Controller {
  queryParams = ['page', 'sort', 'sortDirection'];

  @alias('model.deposits') deposits;
  @alias('model.fund') fund;
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
    name: 'Amount',
    propertyName: 'amountStr',
    sortable: true,
    sortName: 'amount',
  }, {
    linkText: 'View',
    linkTo: 'deposits.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'deposits.edit',
    name: '',
  }];

  get paginationButtons() {
    return [{
      linkToQuery: { fundId: this.fund.id },
      linkToRoute: 'deposits.new',
      linkToText: 'New',
    }];
  }

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
