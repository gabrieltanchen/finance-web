import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class ExpensesShowController extends Controller {
  @alias('model') expense;

  properties = [{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Date',
    propertyName: 'date',
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
    linkParam: 'subcategory.id',
    linkTo: 'subcategories.show',
    name: 'Subcategory',
    propertyName: 'subcategory.name',
  }, {
    linkParam: 'householdMember.id',
    linkTo: 'household-members.show',
    name: 'Household Member',
    propertyName: 'householdMember.name',
  }, {
    linkParam: 'vendor.id',
    linkTo: 'vendors.show',
    name: 'Vendor',
    propertyName: 'vendor.name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];
}
