import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class FundsIndexController extends Controller {
  queryParams = ['page'];

  @alias('model') funds;
  @tracked page = null;

  tableColumns = [{
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Balance',
    propertyName: 'balanceStr',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }, {
    linkText: 'View',
    linkTo: 'funds.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'funds.edit',
    name: '',
  }];

  paginationButtons = [{
    linkToRoute: 'funds.new',
    linkToText: 'New',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
