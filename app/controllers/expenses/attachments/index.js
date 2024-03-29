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
  }, {
    attributeLinkTo: 'downloadUrl',
    linkIcon: 'download',
    linkText: '',
    name: 'Download',
  }, {
    linkText: 'View',
    linkTo: 'expenses.attachments.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'expenses.attachments.edit',
    name: '',
  }];

  get paginationButtons() {
    return [{
      linkToModel: this.expense,
      linkToRoute: 'expenses.attachments.new',
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
