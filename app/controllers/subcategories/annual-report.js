import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  annualReports: alias('model.annualReports'),
  category: alias('model.category'),
  subcategory: alias('model.subcategory'),
});
