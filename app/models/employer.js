import Model, { attr, belongsTo } from '@ember-data/model';

export default class EmployerModel extends Model {
  @attr('date') createdat;
  @attr('string') name;

  @belongsTo('income') income;
}
