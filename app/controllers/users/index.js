import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class UsersIndexController extends Controller {
  queryParams = ['page'];

  @alias('model') users;
  @tracked page = null;

  tableColumns = [{
    name: 'First Name',
    propertyName: 'firstName',
  }, {
    name: 'Last Name',
    propertyName: 'lastName',
  }, {
    name: 'Email',
    propertyName: 'email',
  }, {
    linkText: 'View',
    linkTo: 'users.show',
    name: '',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
