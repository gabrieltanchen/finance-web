import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class EmployersIndexController extends Controller {
  queryParams = ['page'];

  @alias('model') employers;
  @tracked page = null;

  tableColumns = [{
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }, {
    linkText: 'View',
    linkTo: 'employers.show',
    name: '',
  }];

  paginationButtons = [{
    linkToRoute: 'employers.new',
    linkToText: 'New',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
