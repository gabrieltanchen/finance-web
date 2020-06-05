import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class SubcategoriesShowController extends Controller {
  @alias('model') subcategory;

  properties=[{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];
}
