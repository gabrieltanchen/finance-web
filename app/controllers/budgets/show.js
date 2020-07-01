import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class BudgetsShowController extends Controller {
  @alias('model') budget;

  properties = [{
    name: 'ID',
    propertyName: 'id',
  }, {
    linkParam: 'subcategory.id',
    linkTo: 'subcategories.show',
    name: 'Subcategory',
    propertyName: 'subcategory.name',
  }, {
    name: 'Year',
    propertyName: 'year',
  }, {
    name: 'Month',
    propertyName: 'monthStr',
  }, {
    name: 'Amount',
    propertyName: 'amountStr',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];
}
