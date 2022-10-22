import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class ExpensesAttachmentsShowController extends Controller {
  @alias('model') attachment;

  properties = [{
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
