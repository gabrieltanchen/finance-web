import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
// import { get, set } from '@ember/object';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  meta: null,
  tableColumns: [{
    name: 'Year',
    propertyName: 'year',
  }, {
    name: 'Month',
    propertyName: 'month',
  }, {
    name: 'Budget',
    propertyName: 'budget',
  }],
  budgets: alias('model.budgets'),
  subcategory: alias('model.subcategory'),
});
