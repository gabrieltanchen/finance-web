import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class HouseholdMembersShowController extends Controller {
  @alias('model') householdMember;

  properties = [{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }, {
    name: 'Cumulative Income Amount',
    propertyName: 'sumIncomeStr',
  }, {
    name: 'Number of expenses',
    propertyName: 'expenseCount',
  }, {
    name: 'Cumulative Expense Amount',
    propertyName: 'sumAmountStr',
  }, {
    name: 'Cumulative Expense Reimbursed',
    propertyName: 'sumReimbursedStr',
  }, {
    name: 'Cumulative Expense Total',
    propertyName: 'sumTotalStr',
  }]
}
