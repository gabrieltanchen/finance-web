import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class HouseholdMembersIndexController extends Controller {
  queryParams = ['page'];

  @alias('model') householdMembers;
  @tracked page = null;

  tableColumns = [{
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }, {
    linkText: 'View',
    linkTo: 'household-members.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'household-members.edit',
    name: '',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
