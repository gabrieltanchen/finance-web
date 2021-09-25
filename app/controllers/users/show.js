import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class UsersShowController extends Controller {
  @alias('model') user;

  properties=[{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'First Name',
    propertyName: 'firstName',
  }, {
    name: 'Last Name',
    propertyName: 'lastName',
  }, {
    name: 'Email',
    propertyName: 'email',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];
}
