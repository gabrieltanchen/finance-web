import Controller from '@ember/controller';
// import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  category: alias('model.category'),
  expense: alias('model.expense'),
  householdMember: alias('model.householdMember'),
  subcategory: alias('model.subcategory'),
  vendor: alias('model.vendor'),
});
