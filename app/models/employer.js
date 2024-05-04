import Model, { attr, belongsTo } from '@ember-data/model';

export default class EmployerModel extends Model {
  @attr('date') createdAt;
  @attr('string') name;

  @belongsTo('income') income;
}
