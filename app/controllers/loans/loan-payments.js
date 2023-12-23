import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class LoansLoanPaymentsController extends Controller {
  queryParams = ['page', 'sort', 'sortDirection'];

  @alias('model.loan') loan;
  @alias('model.loanPayments') loanPayments;
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
    name: 'Principal Amount',
    propertyName: 'principalAmountStr',
    sortable: true,
    sortName: 'principalAmount',
  }, {
    name: 'Interest Amount',
    propertyName: 'interestAmountStr',
    sortable: true,
    sortName: 'interestAmount',
  }, {
    name: 'Total',
    propertyName: 'totalAmountStr',
  }, {
    linkText: 'View',
    linkTo: 'loan-payments.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'loan-payments.edit',
    name: '',
  }];

  get paginationButtons() {
    return [{
      linkToQuery: { loanId: this.loan.id },
      linkToRoute: 'loan-payments.new',
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
