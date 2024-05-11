import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class IncomeShowController extends Controller {
  @alias('model') income;

  properties = [{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Date',
    propertyName: 'date',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
  }, {
    linkParam: 'householdMember.id',
    linkTo: 'household-members.show',
    name: 'Member',
    propertyName: 'householdMember.name',
  }, {
    linkParam: 'employer.id',
    linkTo: 'employers.show',
    name: 'Employer',
    propertyName: 'employer.name',
  }, {
    name: 'Description',
    propertyName: 'description',
  }];
}
