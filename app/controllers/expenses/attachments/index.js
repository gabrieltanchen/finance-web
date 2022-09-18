import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class ExpensesAttachmentsIndexController extends Controller {
  queryParams = ['page', 'sort', 'sortDirection'];

  @alias('model.attachments') attachments;
  @alias('model.expense') expense;
  @tracked page = null;
  @tracked sort = null;
  @tracked sortDirection = null;
  defaultSort = 'name';
  defaultSortDirection = 'asc';

  tableColumns = [{
    name: 'Name',
    propertyName: 'name',
    sortable: true,
    sortName: 'name',
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
