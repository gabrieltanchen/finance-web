import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class HouseholdMembersExpensesController extends Controller {
  queryParams = ['page'];

  @alias('model.expenses') expenses;
  @alias('model.householdMember') householdMember;
  @tracked page = null;

  tableColumns = [{
    name: 'Date',
    propertyName: 'date',
  }, {
    name: 'Subcategory',
    propertyName: 'subcategory.name',
  }, {
    name: 'Vendor',
    propertyName: 'vendor.name',
  }, {
    name: 'Description',
    propertyName: 'description',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
  }, {
    name: 'Reimbursed Amount',
    propertyName: 'reimbursedAmountStr',
  }, {
    linkText: 'View',
    linkTo: 'expenses.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'expenses.edit',
    name: '',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
