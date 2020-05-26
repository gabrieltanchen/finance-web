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
    propertyName: 'amount',
  }, {
    linkParam: 'householdMember.id',
    linkTo: 'household-members.show',
    name: 'Member',
    propertyName: 'householdMember.name',
  }, {
    name: 'Description',
    propertyName: 'description',
  }];
}
