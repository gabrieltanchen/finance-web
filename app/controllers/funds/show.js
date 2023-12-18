import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class FundsShowController extends Controller {
  @alias('model') fund;

  properties = [{
    name: 'ID',
    propertyName: 'id',
  }, {
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Balance',
    propertyName: 'balanceStr',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];
}
