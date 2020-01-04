import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['month', 'year'],
  budgetReports: alias('model.budgetReports'),
});
