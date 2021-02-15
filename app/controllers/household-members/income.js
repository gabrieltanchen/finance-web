import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class HouseholdMembersIncomeController extends Controller {
  queryParams = ['page', 'sort', 'sortDirection'];

  @alias('model.incomes') incomes;
  @alias('model.householdMember') householdMember;
  @tracked page = null;
  @tracked sort = null;
  @tracked sortDirection = null;

  get currentSort() {
    return this.sort || 'date';
  }

  get currentSortDirection() {
    return this.sortDirection || 'desc';
  }

  get tableColumns() {
    const tableColumns = [{
      name: 'Date',
      propertyName: 'date',
      sortable: true,
      sortName: 'date',
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

    return tableColumns.map((column) => {
      return {
        ...column,
        isSortedAsc: column.sortName === this.currentSort && this.currentSortDirection === 'asc',
        isSortedDesc: column.sortName === this.currentSort && this.currentSortDirection === 'desc',
      };
    });
  }

  @action
  setPage(page) {
    this.page = page;
  }

  @action
  setSort(sortName) {
    if (this.currentSort === sortName && this.currentSortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
    this.sort = sortName;
  }
}
