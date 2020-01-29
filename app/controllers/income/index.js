import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
// import { set } from '@ember/object';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  meta: null,
  tableColumns: [{
    name: 'Date',
    propertyName: 'date',
  }, {
    name: 'Member',
    propertyName: 'household_member.name',
  }, {
    name: 'Description',
    propertyName: 'description',
  }, {
    name: 'Amount',
    propertyName: 'amount_str',
  }],
  incomes: alias('model.incomes'),
});
