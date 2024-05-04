import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class EmployersShowController extends Controller {
  @alias('model') employer;

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
